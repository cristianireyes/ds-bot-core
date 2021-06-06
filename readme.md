<p align="center">
  <img src="" width="200px">
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
This bot implements the **[`discord.js API`](https://discordjs.guide/)** and the **[`discord.ts`](https://owencalvin.github.io/discord.ts/)** framework to provide quick and easy configuration of forward slash commands

<br/>

## 📌 Requirements
**To use the bot, you need to have a valid token, it can be obtained from the discord developer portal**
 - [Discord's developer portal - Bots and Apps](https://discord.com/developers/docs/intro#bots-and-apps)

<br/>

### Preparations
To use discord.js, you'll need to install Node.js

You can follow the official discord guide, in the ***Installing Node.js*** section.
 - [Discord.js Guide - Installing Node.js](https://discordjs.guide/preparations/#installing-node-js)

> ⚠️ Just follow the steps in the indicated section as you should not install Discord as indicated in later steps.

<br/>

## 🚀 Getting started

- Clone this repo `https://github.com/cristianireyes/ds-bot-core`
- run `cd ds-bot-core`
- run `npm i`
- set environment variables in file `.env`. Especially the discord token.
- find where GUILD_ID is and modify it with your server id. *[Need help?](https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje-)*
- run `npm run dev`

<br/>

## ⚡️ Add the bot to your server
On the Discord's developer portal, select your bot, go to the OAuth2 tab and check the following boxes:
  1. SCOPES
      - bot
      - applications.commands
  2. BOT PERMISSIONS
      - Use Slash Commands

![1. Select Scopes](https://owencalvin.github.io/discord.ts/authorize1.png)
![2. Select bot permissions](https://owencalvin.github.io/discord.ts/authorize2.png)

<br/>

## 📑 Documentation
You can find useful documentation at
- in the **docs folder** at the root of this repository `/docs`
- in [Discord's developer portal](https://discord.com/developers/docs/intro)
- in [Discord.js Guide](https://discordjs.guide/)
- in [Discord.ts official documentation](https://owencalvin.github.io/discord.ts/)

<br/>

## 🩺 Support
In case of errors, you can create a problem by detailing your problem
