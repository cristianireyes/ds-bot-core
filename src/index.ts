import 'reflect-metadata';
import { Client } from '@typeit/discord';
import { Intents } from 'discord.js';
import { ALLOWED_GUILDS, APP_VERSION, DISCORD_TOKEN } from './config';

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
      // slashGuilds: ["guild_id"],
      classes: [
        `${__dirname}/*.ts`,
        `${__dirname}/commands/*.ts`,
        `${__dirname}/*.js`, // compiled
      ],
      requiredByDefault: true,
    });

    await this.client.login(DISCORD_TOKEN);

    this.client.once('ready', async () => {
      await this.client.clearSlashes(); // globally
      await this.client.clearSlashes(...ALLOWED_GUILDS);
      await this.client.initSlashes();
      this.client.user.setActivity({
        name: `v${ APP_VERSION }`,
        type: 'PLAYING',
      });

      console.log(`Bot started 🚀 v${ APP_VERSION }`);
    });

    this.client.on('interaction', async (interaction) => {
      // Uncomment to use interaction defer (wip)
      // if (!interaction.isCommand()) return;
      // await interaction.defer();

      this.client.executeSlash(interaction);
    });

    // Uncomment to log the debug infos from discord.js
    // this.client.on('debug', console.log);
  }
}

Main.start();
