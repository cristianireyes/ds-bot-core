<p align="center">
  <img src="https://user-images.githubusercontent.com/34529231/121291304-6f34ba00-c8be-11eb-984a-fc0b3cb346ce.png" width="250px">
  <h2 align="center">
    <p>✨ Discord Bot Core - docs ✨</p>
  </h2>
  <br/>
</p>


# 🦄 Introduction
This bot implements the **[`discord.js API`](https://discord.com/developers/docs)** and the **[`discord.ts`](https://owencalvin.github.io/discord.ts/)** framework to provide quick and easy configuration of forward **[`slash commands`](https://discord.com/developers/docs/interactions/slash-commands)**

The main idea of this project is to have a bot configured and ready to start typing commands. Without worrying about the configuration and implementation of discord.js   
It also offers tools to keep your code clean and neat, run tests, manage permissions in your commands, debugging and more.

<br/>

# ⚙️ Configuring your bot
Once you have cloned the repository and installed your packages, you will need to set your configuration
- `token`: A token is essentially your bot's password. You can find more information in the ***[discord guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#what-is-a-token-anyway)***.
- `guild_id`: Serves for apply Slash to specific guild globally.

##  👉 Set token
When you get your token, you will need to add it to your environment file, in this case `.env`

```sh
## .env 
    
# Discord
DISCORD_TOKEN = 'YOUR_TOKEN'
```

## 👉 Set guild_id
If you want to create commands for one or more specific guilds, you must declare its guild_id. The array is passed to the `@Guild(...ALLOWED_GUILDS)` decorator on each command. For example:
```ts
@Discord()
@Guild(...ALLOWED_GUILDS)
@Group('utilities', 'Useful commands')
export abstract class AnotherGroup {
  // ... your commands
}
```
You can set your guild_id in config file, following path `src/config/index.ts`.
```ts
export const ALLOWED_GUILDS: string[] = [
  'GUILD_ID_1',
  'GUILD_ID_2',
];
```

## 👉 Set bot scope
When you *[add your bot to discord](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#creating-and-using-your-invite-link)* you need to set the permissions, for this:   
On the Discord's developer portal, select your bot, go to the **OAuth2** tab and check the following boxes:
  1. SCOPES
      - bot
      - applications.commands
  2. BOT PERMISSIONS
      - Use Slash Commands

![permissions](https://user-images.githubusercontent.com/34529231/120912886-60a19500-c669-11eb-9494-92b88d38e0c9.png)

<br/>

# 💅 Eslint and Prettier
To run eslint in your project, you can do it in the following ways:
- `npm run lint`: Parses code writing errors and fails if it finds any.
- `npm run format`: Fix code writing errors found.

For automatic fixes or saving the file, you can configure your vscode or install the official extensions for [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

> You can see the extensions I recommend by following the path `/.vscode/extensions.json`

<br/>

# 🧪 Test
This project also offers support for testing. You can deposit your new tests in the test folder and then run them with the following command:
```
$ npm test
```

<br/>

# 👾 Slash commands
This bot implements the slash command API. The commands can be created in the `/commands` folder.   
In this project, a new class is created for each new group of commands. We recommend separating the classes into .ts files.  
![command-group-class-example](https://user-images.githubusercontent.com/34529231/121291538-d18dba80-c8be-11eb-8e30-d1c902ca8af6.png)


To create forward slash commands you can check *[the documentation](https://owencalvin.github.io/discord.ts/decorators/slash.html#initialize-client-and-slash-commands)* for `@typeit/discord`

To use the commands, you can do it from the discord chat accessing with `/your_command`. In the case of having command groups, you must prepend the *name of the group* in the command, for example for the group utilities, `/utilities countCharacters`.   

![example-command](https://user-images.githubusercontent.com/34529231/121291483-b8850980-c8be-11eb-83b0-dee78ae81898.png)



<br/>

# 🚀 Launching your bot
You can launch your bot in different ways, for development I recommend:
- `development mode`: On your console run `npm run dev` to launch your bot in development mode.
- `vscode debugger`: In vscode, go to the debug options and launch the debugger.

You should see something like this:   
![console-output](https://user-images.githubusercontent.com/34529231/121291575-e10d0380-c8be-11eb-8855-c7588dd271ed.png)

<br/>

# 📦 Packages
- `@typeit/discord`: una extension de discord que ofrece decoradores y typescript.
- `discord.js`: A powerful JavaScript library for interacting with the Discord API
- `dotenv`: dotenv implementation. Set your configuration with environment variables.
- `chai`: It is a library of assertions, which can be paired with any Javascript test framework
- `mocha`: Is a JavaScript test framework that runs on Node.js and in the browser.
- `eslint`: Is a static code analysis tool for identifying problematic patterns found in JavaScript code
- `husky`: Is a tool that allows us to easily wrangle Git hooks and run the scripts we want at those stages
- `nodemon`: Is a tool that allows you to automatically restart the node application when file changes are detected in the directory.
- `prettier`: Is an opinionated code formatter. It removes all original styling and ensures that all outputted code conforms to a consistent style
- `typescript`: Adds optional types to JavaScript that support tools for large-scale JavaScript applications. TypeScript compiles to readable, standards-based JavaScript

<br/>

# 🩺 Support
In case you need support, have bugs or encounter problems, you can **[create a issue](https://github.com/cristianireyes/ds-bot-core/issues)** by detailing your problem.
