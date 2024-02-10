import pkg from "grammy";
import botError from "./bot-error.js";

const { Bot, InlineKeyboard, Keyboard, session } = pkg;

const TOKEN = "6771697559:AAFrI1TYf34WedLaMNp44zZU7ucKVyd3oRY";
const web_link = "https://demo-test-mini-app.vercel.app/";

const bot = new Bot(TOKEN);

// const commands = [{ command: "start", description: "Start You Order!" }];

// try {
//   await bot.api.setMyCommands(commands);
//   console.log("Bot commands set successfully!");
// } catch (error) {
//   console.error("Failed to set bot commands:", error.description);
// }

// bot.command("start", (ctx) => {
//   ctx.reply("Welcome! Click below to place an order.", {
//     reply_markup: {
//       keyboard: [[{ text: "Order Now", web_app: { url: web_link } }]],
//       resize_keyboard: true,
//     },
//   });
// });

botError(bot);

bot.start();
