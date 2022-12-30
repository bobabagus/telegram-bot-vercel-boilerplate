import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:greeting_text');

const replyToMessage = (ctx: Context, messageId: number, string: string) =>
  ctx.reply(string, {
    reply_to_message_id: messageId,
  });

const greeting = () => async (ctx: Context) => {
  debug('Triggered "greeting" text command');

  const messageId = ctx.message?.message_id;
  const userName = `${ctx.message?.from.first_name} ${ctx.message?.from.last_name}`;
  const objs = JSON.stringify(ctx.message);
  const objs2 = JSON.parse(objs);
  const msgs = objs2.text;
  let splitLine = msgs.split(`\n`);
  if (messageId ) {
    await replyToMessage(ctx, messageId, `${splitLine[0]}`);
  }
};

export { greeting };
