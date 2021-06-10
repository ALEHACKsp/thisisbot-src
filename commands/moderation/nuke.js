const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Logging = require('../../database/schemas/logging.js')

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'nuke',
        aliases: [ 'nuked'],
        description: 'Nuke the Channel',
        category: 'Moderation',
        usage: 'nuke',
        examples: ['nuke', 'nuke'],
        guildOnly: true,
        botPermission: ['MANAGE_MESSAGES'],
        userPermission: ['MANAGE_MESSAGES'],
      });
    }

    async run(message, args) {

let client = message.client

 const reason = args.join(" ") || ":0 No Reason :/";
        if(!message.channel.deletable) {
            const embed = new Discord.MessageEmbed()
                .setDescription("BRAU")
                .setColor("#FF0000")
                .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL({  dynamic: true, size: 2048 }))
                .setImage('https://cdn.discordapp.com/attachments/811143476522909718/819507596302090261/boom.gif')
                .setTimestamp()
            return message.reply(embed);
        }
        const newchannel = await message.channel.clone();
        await message.channel.delete();
        const embed = new Discord.MessageEmbed()
            .setDescription("Nuked this Channel")
            .setColor("#FF0000")
            .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL({  dynamic: true, size: 2048 }))
            .setImage('https://cdn.discordapp.com/attachments/811143476522909718/819507596302090261/boom.gif')
            .setTimestamp();
         await newchannel.send(embed);
 
        }
    }  
