import { CommandInteraction } from 'discord.js';
import {
  Discord,
  Slash,
  Option,
  Guild,
  Group,
  Description,
} from '@typeit/discord';
import { ALLOWED_GUILDS } from '../config';

@Discord()
@Guild(...ALLOWED_GUILDS)
@Group(
  'utilities',
  'Useful commands',
)
export abstract class AnotherGroup {
  @Slash('countCharacters')
  @Description('Counts the characters of a text')
  countCharacters(
    @Option('text', { description: 'Text to count', required: true })
      text: string,
      interaction: CommandInteraction,
  ) {
    const total = String(text.length || 0);
    const result = `🧠 *${ text }* has \`${ total }\` characters`;
    return interaction.reply(result);
  }
}
