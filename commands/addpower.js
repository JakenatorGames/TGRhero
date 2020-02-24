const Discord = require("discord.js");

const db = require("quick.db");

const ms = require("ms");
module.exports = {
  config: {
    name: "addpower",

    aliases: ["Vouch", "addrep"]
  },
  run: async (client, msg, args) => {
    let embed = new Discord.RichEmbed()
  
  

    .setTitle("TGR Bot")
    .setColor("RED")
    .addField("Error", `Must have the requried rank!`)
    .setFooter("❌ Error | The Galactic Republic")
    
    if (
      !msg.member.roles.some(r =>
        ["C2 - Regimental Commander"].includes(r.name)
      )
    )
      // OPTIONAL - Checks if the sender has the specified roles to carry on further
      return msg.channel.send(embed)

    let bl = await db.fetch(`blid_${msg.author.id}`);
    if (msg.author.id === bl) {
      return msg.channel.send(
        "**You are blacklisted. Please contact a manager for questions..**"
      );
    } //i know

    let n = await db.fetch(`gban_${msg.guild.id}`);
    if (msg.guild.id === n)
      return msg.channel.send("Error, your guild is blacklisted.");

    let user = msg.mentions.members.first();
    
    let repc = await db.fetch(`rep_${user.id}`);

    if (msg.author.id === process.env.id) {
      return msg.channel.send(
        "**You are blacklisted. Please contact a manager for questions..**"
      );
    }
    if (msg.guild.id === process.env.gid) {
      return msg.channel.send(
        "**You guild id is on the blacklist, use *blappeal if wanting it to be removed.**"
      );
    }


      let w = new Discord.RichEmbed()
        .setTitle("Power Added")
        .setDescription(`Added a power to ${user}`);
      msg.channel.send(w);

      db.add(`rep_${user.id}`, 1);

      db.set(`re_${msg.author.id}`, Date.now());
    }
  }

