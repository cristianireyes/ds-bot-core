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
  'maths',
  'Arithmetic operations',
)
export abstract class Maths {
  @Slash('add')
  @Description('Add two numbers')
  add(
    @Option('x', { description: 'x value' })
      x: number,
    @Option('y', { description: 'y value' })
      y: number,
      interaction: CommandInteraction,
  ) {
    interaction.reply(String(x + y));
  }

  @Slash('multiply')
  @Description('Multiply two numbers')
  multiply(
    @Option('x', { description: 'x value' })
      x: number,
    @Option('y', { description: 'y value' })
      y: number,
      interaction: CommandInteraction,
  ) {
    interaction.reply(String(x * y));
  }
}
