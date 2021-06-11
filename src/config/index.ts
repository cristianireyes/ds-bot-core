import { version } from '../../package.json';
import dotenv from 'dotenv';
dotenv.config();

export const APP_VERSION: string = version;

export const { DISCORD_TOKEN } = process.env;

export const ALLOWED_GUILDS: string[] = [
  '301882242198929412',
];
