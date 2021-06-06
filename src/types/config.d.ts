export interface DiscordConfig {
  owner: string;
  prefix: string;
  token: string;
}

export interface FirebaseConfig {
  apiKey: string;
  appId: string;
  authDomain: string;
  messagingSenderId: string;
  measurementId: string;
  projectId: string;
  storageBucket: string;
}

export interface PostgresConfig {
  driver: string;
  host: string;
  name: string;
  password: string;
  port: string;
  user: string;
}
