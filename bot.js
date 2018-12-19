const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("525020963268591635")
setInterval(function() {
channel.send(`bhaa bhaa bhaa bhaa bhaa bhaa bhaa bhhaa bhaa bhaa`);
}, 30)
})

client.login(process.env.BOT_TOKEN);