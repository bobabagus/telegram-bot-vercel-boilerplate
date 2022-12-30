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
  const objs2 = JSON.parse(objs)
  const msgs = objs2.text
  const password = 'Bobabagus'
  let arr = msgs.split('\n')
  let postObjects: any = {}
  arr.forEach((ar: any, ari: any) => {
    let keyval: any = ar.split(': ')
    if (keyval[1]) {
      postObjects[keyval[0]] = keyval[1]
    }
  })
  let thepost: any = `[${postObjects?.name}](${postObjects?.link})
Type : ${postObjects?.type.toUpperCase()}
Size : ${postObjects?.size.toUpperCase()}
Content: ${postObjects?.vid} Videos, ${postObjects?.img} Images
Password: ${password}

>>> Link Download [${postObjects.name}](${postObjects.link})

Buat yg Error Silahkan Pakai Cloudflare, APP nya bisa download di : https://1.1.1.1/

Visit New Web : https://openboba.shop
Link Rusak atau mati silahkan comment`
  if (messageId) {
    await replyToMessage(ctx, messageId, `hello ${userName} ${thepost}`);
  }
};

export { greeting };
