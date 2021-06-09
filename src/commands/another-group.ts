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
  add(
    @Option('text', { description: 'Text to count', required: true })
      text: string,
      interaction: CommandInteraction,
  ) {
    interaction.reply(String(text ? text.length : 0));
  }
}
