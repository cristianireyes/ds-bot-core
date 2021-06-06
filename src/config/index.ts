import dotenv from 'dotenv';

dotenv.config();

import { DiscordConfig, FirebaseConfig, PostgresConfig } from 'types/config';

export const discordConfig: DiscordConfig = {
  owner: process.env.BOT_OWNER,
  prefix: process.env.BOT_PREFIX,
  token: process.env.DISCORD_TOKEN,
};

export const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.API_KEY,
  appId: process.env.APP_ID,
  authDomain: process.env.AUTH_DOMAIN,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  measurementId: process.env.MEASUREMENT_ID,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
};

export const postgresConfig: PostgresConfig = {
  driver: process.env.DB_DRIVER,
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
};

export const ALLOWED_GUILDS: string[] = [
  'GUID_ID_1',
  'GUID_ID_2',
];
