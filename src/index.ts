import 'reflect-metadata';
import { Client } from '@typeit/discord';
import { Intents } from 'discord.js';
import { ALLOWED_GUILDS, discordConfig } from './config';

export class Main {
  private static _client: Client;

  static get client(): Client {
    return this._client;
  }

  static async start() {
    this._client = new Client({
      intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_VOICE_STATES,
      ],
      // Uncomment to set the GuildID globaly
      // slashGuilds: ["693401527494377482"],
      classes: [
        `${__dirname}/*.ts`,
        `${__dirname}/commands/*.ts`,
        `${__dirname}/*.js`,
      ],
      requiredByDefault: true,
    });

    await this._client.login(discordConfig.token);

    this._client.once('ready', async () => {
      // Uncomment to clear the Slashes from Discord at startup
      await this._client.clearSlashes();
      await this._client.clearSlashes(...ALLOWED_GUILDS);
      await this._client.initSlashes();
      this._client.user.setActivity({
        name: 'v.0.0.1',
        type: 'PLAYING',
      });

      console.log('Bot started 🚀');
    });

    this._client.on('interaction', async (interaction) => {
      // Uncomment to use interaction defer
      // if (!interaction.isCommand()) return;
      // await interaction.defer();

      this._client.executeSlash(interaction);
    });

    // Uncomment to log the debug infos from discord.js
    // this._client.on('debug', console.log);
  }
}

Main.start();
