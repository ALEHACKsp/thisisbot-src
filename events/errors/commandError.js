const Event = require('../../structures/Event');
const Discord = require('discord.js');
const webhookClient = new Discord.WebhookClient('', '');

module.exports = class extends Event {

  async run(error, message) {
    console.error(error)
    
                  if(message.channel &&
      message.channel.viewable &&
      message.channel.permissionsFor(message.guild.me).has(['SEND_MESSAGES', 'EMBED_LINKS'])){
 message.channel.send(`${message.client.emoji.fail} Hey Guys! An Error just occured, make sure to report it here https://discord.gg/Vg3zzuyr98`).catch(()=>{})
      }

   

    webhookClient.send(`${message.author.username} (${message.author.id})\n${message.content}\n${error}`);
    
  }
};