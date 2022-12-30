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
  // const objs = JSON.stringify(ctx.message);
  // const objs2 = JSON.parse(objs);
  const msgs = ctx.message?.text??ctx.message.caption;
  let splitLine = msgs.split(`\n`);
  let postObject:any = {}
  splitLine.forEach((line: any) => {
    let pairs = line.split(': ')
    postObject[pairs[0]] = pairs[1]??'empty'
  });
  let footerText = `\nBuat yg Error Silahkan Pakai Cloudflare, APP nya bisa download di : https://1.1.1.1/\n\nVisit New Web : https://openboba.shop
Link Rusak atau mati silahkan comment`
let thePost = ``
Object.entries(postObject).map((entry) => {
  const [key, value] = entry;
  thePost += `${key}: ${value}\n`
})
thePost += footerText
  if (messageId ) {
    await replyToMessage(ctx, messageId, `${thePost}\n\n${objs}`);
  }
};

export { greeting };
