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
  const message = objs2.text
  arr = message.split('\n')
  obj = {}
arr.forEach((ar, ari)=>{
  keyval = ar.split(': ')
if(keyval[1]){
obj[keyval[0]]=keyval[1]
}
})
password= 'Bobabagus'
console.log(obj)
thepost = `[${obj.name}](${obj.link})
Type : ${obj.type.toUpperCase()}
Size : ${obj.size.toUpperCase()}
Content: ${obj.vid} Videos, ${obj.img} Images
Password: 

>>> Link Download [${obj.name}](${obj.link})

Buat yg Error Silahkan Pakai Cloudflare, APP nya bisa download di : https://1.1.1.1/

Visit New Web : https://openboba.shop
Link Rusak atau mati silahkan comment`
  if (messageId) {
    await replyToMessage(ctx, messageId, `hello ${userName} ${obj}`);
  }
};

export { greeting };
