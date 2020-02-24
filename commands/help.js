const Discord = require("discord.js");

const db = require("quick.db");

const ms = require("ms");
module.exports = {
  config: {
    name: "help",

  },
  run: async (bot, msg, args) => {
    
    let embed = new Discord.RichEmbed()
  
  

    .setTitle(`TGR Bot`)
    .setColor("GREEN")
    .addField("Bot Commands", `addpower, power, verify`)
    .addField("Whitelist Commands", `getrole, createkey, removekey, whitelist`)
    .setFooter(`✔️ Success | The Galactic Republic`, `${bot.user.displayAvatarURL}`)
    
    
    msg.channel.send(embed)
    

    
    }}
   
