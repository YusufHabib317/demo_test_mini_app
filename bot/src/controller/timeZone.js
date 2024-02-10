async function determineTimeZone(cityName) {
  // In a real implementation, you would call an external API to get the time zone
  // For demonstration, let's assume the city name is always Damascus
  return "Asia/Damascus";
}

export default async function timeZoneMessage(ctx) {
  if (ctx.session.awaitingTimeZone) {
    const cityName = ctx.message.text;
    const timeZone = await determineTimeZone(cityName);

    if (timeZone) {
      ctx.session.timeZone = timeZone;
      ctx.session.awaitingTimeZone = false;

      const localTime = moment().tz(timeZone).format("hh:mm:ss A");
      let message = `Your time zone has been determined. If the result seems wrong to you, please open time zone settings again and try to be more specific. For example, send me the name of your city and country in one message.\n\n`;
      message += `Your current settings:\n\n`;
      message += ` - Language: ${ctx.session.language}\n`;
      message += ` - Time zone: ${timeZone} (${moment
        .tz(timeZone)
        .format("Z")})\n`;
      message += ` - Local time: ${localTime}\n`;
      message += ` - Passwords in links: ${ctx.session.passwordsInLinks}`;

      return ctx.reply(message);
    } else {
      return ctx.reply(
        "Sorry, I couldn't determine your time zone. Please try again."
      );
    }
  }
}
