const Discord = require('discord.js')

const db = require('quick.db')
module.exports = {
  config: {
    
    name: "power",
    aliases: ["Power", "Rep"]
    
    
    
  
},
run: async(client, msg, args) => {
  let embed = new Discord.RichEmbed()
  
  

    .setTitle("TGR Bot")
    .setColor("RED")
    .addField("Error", `Must have the requried rank!`)
    .setFooter("❌ Error | The Galactic Republic")


  
   if (
      !msg.member.roles.some(r =>
        ["E1 - Cadet"].includes(r.name)
      )
    )
      // OPTIONAL - Checks if the sender has the specified roles to carry on further
      return msg.channel.send(embed)
  
 let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
     let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    
  let user = msg.mentions.members.first() || msg.author;
  let m = await db.fetch(`rep_${user.id}`)
    
if(m === null) m = "No Power"

  let d = new Discord.RichEmbed()
  .setTitle("Power")
  .addField("User", `${user}`)
  .addField("Power", `${m}`)
  msg.channel.send(d)
}}


