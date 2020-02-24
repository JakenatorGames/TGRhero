


const roblox = require('noblox.js')
const Discord = require('discord.js')
const client = new Discord.Client();

 
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_5A51DCE97978E818488057E8896D25E6AE913FD4EBDF832CD06F20C657CBC5B40A60EF24D8D0975FB62E817F4580155D3627258DF66BE024D5BACD6F1E39A147D2D43D6271DF0551E311F4E0FEBBCEB41669233029FB64496698453A721D18CA6C07B12362C7DAD52479E956067FB1968A230CA7E47D43D00F04413C9B95DC84ABB67B37297207822C025E52A263F5774D9FFE0CE87AEDA51F1A5D4751C91397E314E8C90D5BDBB82615E34A213A24083426C651A8C71F273545B4C736EDAD8869B80F122EB52C837545F2FDECF517833687FF211B1348E7DCDBA8FEFD64B240C8954379B9A68A06728077AED8B711B00EBCA927FB1ABB2B9728D11AB6F912294EDAA59A893B9D18C7D351B55B7ABDC2B5634BD7415393124B47DBE6F793EEF5D2045383";
var prefix = ';';
var groupId = 5671870;
var maximumRank = 15;

function login() {
    return roblox.cookieLogin(cookie);
}
 
login() // Log into ROBLOX
    .then(function() { // After the function has been executed
        console.log('Logged in.') // Log to the console that we've logged in
    })
    .catch(function(error) { // This is a catch in the case that there's an error. Not using this will result in an unhandled rejection error.
        console.log(`Login error: ${error}`) // Log the error to console if there is one.
    });
 
function isCommand(command, message){
    var command = command.toLowerCase();
    var content = message.content.toLowerCase();
    return content.startsWith(prefix + command);
}
 let lol = new Discord.RichEmbed()

.setTitle("TGR Bot")
.addField("Error has occured!", `You do not meet the required rank!`)
.setFooter(`:x: Error | The Galactic Republic`)

 
client.on('message', (message) => {
    if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
   
    if(isCommand('setrank', message)){
       if(!message.member.roles.some(r=>["C2 - Regimental Commander"].includes(r.name)) ) // OPTIONAL - Checks if the sender has the specified roles to carry on further
        return message.channel.send(lol)
        var username = args[1]
        var rankIdentifier = Number(args[2]) ? Number(args[2]) : args[2];
        if (!rankIdentifier) return message.channel.send("Please enter a rank");
        if (username){
            message.channel.send(`Checking ROBLOX for ${username}`)
            roblox.getIdFromUsername(username)
            .then(function(id){
                roblox.getRankInGroup(groupId, id)
                .then(function(rank){
                    if(maximumRank <= rank){
                        message.channel.send(`${id} is rank ${rank} and not promotable.`)
                    } else {
                        message.channel.send(`${id} is rank ${rank} and promotable.`)
                        roblox.setRank(groupId, id, rankIdentifier)
                        .then(function(newRole){
                            message.channel.send(`Changed rank to ${newRole.name}`)
                        }).catch(function(err){
                            console.error(err)
                            message.channel.send("Failed to change rank.")
                        });
                    }
                }).catch(function(err){
                    message.channel.send("Couldn't get that player in the group.")
                });
            }).catch(function(err){
                message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
          });
      } else {
          message.channel.send("Please enter a username.")
      }
      return;
  }
})

client.on('ready', () => {
  
  client.user.setActivity("The Server", {type: "Watching"})
  console.log('Super Logging In!')
  
})


var prefix = `;`;

client.on(`message`, async message =>{

    let args = message.content.slice(prefix.length).trim().split(` `);

    let cmd = args.shift().toLowerCase();



    if(message.author.bot) return

    if(!message.content.startsWith(prefix)) return;


   



    try{

        let ops = {

            verfied: "111"

        }



        let commandFile = require(`./commands/${cmd}.js`);

        commandFile.run(client, message, args, ops);

    } catch(e) {

        console.log(e.stack);

    } 

})


client.login('NjgwOTI1NDc2Njk2NjIxMDk1.XlRamg.8FCkc8jUwWx0x6YT7J2Xv_BjD-A')



