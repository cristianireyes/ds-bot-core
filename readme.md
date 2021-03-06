<p align="center">
  <img src="https://user-images.githubusercontent.com/34529231/120911765-4fa05600-c660-11eb-9926-44686aaa15fb.png" width="250px">
  <h1 align="center">
    <p>⚡️ Discord Bot Core ⚡️</p>
  </h1>
  <h3 align="center">
    The basis of a multipurpose bot that<br/>
    implements Typescript and Slash commands
  </h3>
  <br/>
</p>


## 👀 Introduction
This bot implements the **[`discord.js API`](https://discord.com/developers/docs)** and the **[`discord.ts`](https://owencalvin.github.io/discord.ts/)** framework to provide quick and easy configuration of forward **[`slash commands`](https://discord.com/developers/docs/interactions/application-commands#slash-commands)**

<br/>

## 📌 Requirements
**To use the bot, you need to have a valid token, it can be obtained from the discord developer portal**
 - [Discord's developer portal - Bots and Apps](https://discord.com/developers/docs/intro#bots-and-apps)

### Preparations
To use discord.js, you'll need to install [Node.js 12.0 or higher.](https://nodejs.org/)

You can follow the official discord guide, in the ***Installing Node.js*** section.
 - [Discord.js Guide - Installing Node.js](https://discordjs.guide/preparations/#installing-node-js)

> ⚠️ Just follow the first section of the guide, which have the installing node.js

<br/>

## 🚀 Getting started

- clone this repo `git clone https://github.com/cristianireyes/ds-bot-core.git`
- run `cd ds-bot-core`
- run `npm i`
- set environment variables in file `.env`. Especially the ***discord token***.
- in the follow path `src/config/index.ts` replace `guild_id` with your server id. *[How do i get my server id?](https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje-)*
- run `npm run dev`

<br/>

## ⚡️ Add the bot to your server
On the Discord's developer portal, select your bot, go to the **OAuth2** tab and check the following boxes:
  1. SCOPES
      - bot
      - applications.commands
  2. BOT PERMISSIONS
      - Use Slash Commands

![permissions](https://user-images.githubusercontent.com/34529231/120912886-60a19500-c669-11eb-9494-92b88d38e0c9.png)

<br/>

## 📑 Documentation
You can find useful documentation at
- in the **[`docs folder`](https://github.com/cristianireyes/ds-bot-core/tree/main/docs)** at the root of this repository `/docs`
- in [Discord's developer portal](https://discord.com/developers/docs/intro)
- in [Discord.js Guide](https://discordjs.guide/)
- in [Discord.ts official documentation](https://owencalvin.github.io/discord.ts/)

<br/>

## 🩺 Support
In case of errors, you can create a [issue](https://github.com/cristianireyes/ds-bot-core/issues) by detailing your problem.
