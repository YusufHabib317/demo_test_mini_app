import { parse } from "numbers-from-words";
import numberToWords from "number-to-words";

export default async function reminder(ctx) {
  ctx.session.state = "adding";

  const inputText = ctx.message.text;
  const numberWords = Array.from({ length: 61 }, (value, index) =>
    numberToWords.toWords(index)
  );
  if (ctx.session.state === "adding") {
    const excludedKeywords = [
      "Back",
      "❌ Cancel",
      "Cancel",
      "Setting",
      "Language",
      "Delete",
      "➕ Add",
      "Add",
      "List",
    ];

    if (excludedKeywords.includes(inputText)) {
      if (inputText === "❌ Cancel") {
        return ctx.reply("going back", {
          reply_markup: {
            keyboard: [["➕ Add", "List"], ["Settings"]],
            resize_keyboard: true,
          },
        });
      }
      if (inputText === "Back") {
        return ctx.reply("going back", {
          reply_markup: {
            keyboard: [["➕ Add", "List"], ["Settings"]],
            resize_keyboard: true,
          },
        });
      }
    }

    const words = inputText.split(" ");
    const processedWords = words.map((word) => {
      if (numberWords.includes(word.toLowerCase())) {
        try {
          return parse(word);
        } catch (error) {
          return word; // In case of any unexpected error in parsing
        }
      } else {
        return word;
      }
    });

    const processedText = processedWords.join(" ");

    ctx.session.state = "main";
    ctx.session.reminders.push(processedText);
    return ctx.reply("✅ Reminder added: " + processedText, {
      reply_markup: {
        keyboard: [["➕ Add", "List"], ["Settings"]],
        resize_keyboard: true,
      },
    });
  }
}
