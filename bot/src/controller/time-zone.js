import moment from "moment";

export default async function timeZone(ctx) {
  ctx.session.awaitingTimeZone = true;
  return ctx.reply(
    "Please send me the name of your city or your location so that I could determine your timezone."
  );
}
