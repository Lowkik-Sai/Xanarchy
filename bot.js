const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');
require("./server.js");

client.on('ready', () => {
 console.log("Bot ("+client.user.tag+") Ready!");
 });
 
client.on("message", async message => {
  const prefix = "-";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "startgen"){
	var i = 0;
    while (i<1000) { //Number of messages
    var password = generator.generate({
    length: 16,
    numbers: true
});
	message.channel.send("https://discord.gift/" + password)
    i++;
	}
  }
})

client.login(process.env.BOT_TOKEN);
