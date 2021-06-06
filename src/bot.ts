import {
  Discord,
  Guild,
  On,
} from '@typeit/discord';
import { Message } from 'discord.js';
import { ALLOWED_GUILDS } from './config';

@Discord()
@Guild(...ALLOWED_GUILDS)
export abstract class BotDiscord {
  @On('message')
  private onMessage(message: Message) {
    console.log(message);
  }
}
