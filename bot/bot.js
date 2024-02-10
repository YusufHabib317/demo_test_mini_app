import { Telegraf } from "telegraf";

// const { Telegraf } = require('telegraf')

const TOKEN = "6771697559:AAFrI1TYf34WedLaMNp44zZU7ucKVyd3oRY";

const web_link = "https://demo-test-mini-app.vercel.app/";

const bot = new Telegraf(TOKEN);

bot.start((ctx) =>
  ctx.reply("Welcome", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
