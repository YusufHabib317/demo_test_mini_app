import pkg from "grammy";
import moment from "moment";
const { Keyboard } = pkg;

const m = moment();

export default async function setting(ctx) {
  ctx.session.state = "setting";
  const offsetMinutes = m.utcOffset();
  const hours = Math.abs(Math.floor(offsetMinutes / 60));
  const minutes = Math.abs(offsetMinutes % 60);

  // Format the offset string
  const offsetString =
    (offsetMinutes >= 0 ? "+" : "-") + hours + (minutes ? `:${minutes}` : "");

  const localTime = m.format("hh:mm:ss A");

  let message = `Your current settings:\n\n`;
  message += ` - Language: ${ctx.session.language}\n`;
  message += ` - Time zone: ${offsetString}\n`;
  message += ` - Local time: ${localTime}\n`;
  message += ` - Passwords in links: ${ctx.session.passwordsInLinks}`;

  const keyboard = new Keyboard()
    .text("Language")
    .text("Time Zone")
    .row()
    .text("Password in Links")
    .text("Back");

  return ctx.reply(message, {
    reply_markup: {
      keyboard: keyboard.build(),
      resize_keyboard: true,
    },
  });
}
