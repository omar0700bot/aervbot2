const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "%";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`veit ..`,"http://twitch.tv/veit")
client.user.setStatus("dnd")
});


client.login(process.env.BOT_TOKEN);


});
owner= 560434723323904002
stayinchannel=true
// Codes +
const http = require("http");
const express = require("express");
const cmd = require("node-cmd");
const app = express();

// https://discord.gg/BYxY72C

app.get("/", (_, r) => r.sendStatus(200));
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 4 * 60 * 1000);

// Julian

cmd.run("java -Dnogui=true -jar jmusic.jar");

// https://discord.gg/BYxY72C
{
  "name": "jmusic-glitch",
  "version": "0.2.5",
  "description": "Jagrosh Music on Glitch.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.16.4",
    "node-cmd": "^3.0.0",
    "child_process": "^1.0.2"
  },
  "engines": {
    "node": "8.x"
  }
}


client.login(process.env.BOT_TOKEN);
