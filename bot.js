const aoijs = require("aoi.js");
const dbdExpress = require("dbd.express")
const bot = new aoijs.Bot({
  token: "TOKEN",  // .env dosyasına tokeni koyduysanız bu kısmı [ token: process.env.token, ] olarak değiştirin.
  prefix: "!", // Botunuzun prefixini(ön ekini) belirleyin.
  intents: "all", 
  mobilePlatform: false, // Botunuz mobileden giriş yapıyormuş gibi bir simge çıkmasını istiyorsanız [ true ] yazın.
  sharding: false, // Shard bağlamak istiyorsanız buraya [ true ] yazın.
  shardAmount: 2, 
});
 const Dashboard = new dbdExpress(bot)
Dashboard.API({
  port: 8080,
  useSecureProtocol:true,
  authorizationKey: "Bearer root@1234",
 headers:{
  'Authorization': 'Bearer root@1234',
  'Content-Type': "application/json"
}
})
Dashboard.createUI()

bot.loadCommands(`./command/`)

bot.variables({
 sifre:"okunmamıs",
})

bot.status({
 text: "ghostdevxd",
 type:"WATCHING",
 time:"12"
})
bot.readyCommand({
    channel: "",
    code: `
$log[
$userTag[$clientid] Giriş Yapıldı!
$pingms - ping
$serverCount - sunucu
$allMembersCount - kullanıcı]`
})
