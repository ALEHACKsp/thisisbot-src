const Command = require('../../structures/Command');
const Guild = require('../../database/schemas/Guild');
const discord = require("discord.js");


module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'play',
        aliases: [ 'play' ],
        description: 'play',
        category: 'Fun',
        usage: 'play',
        examples: [ 'play' ],
        cooldown: 3
      });
    }

    async run(message, args) {

        const embednoinvoice = new Discord.MessageEmbed()
        .setTitle('Error!')
        .setDescription(`${client.emotes.error} - You're not in a voice channel !`)
        .setFooter('ThisIsRico Music System')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp();
        const embedspecify = new Discord.MessageEmbed()
        .setTitle('Error!')
        .setDescription(`${client.emotes.error} - Please indicate the title of a song !`)
        .setFooter('ThisIsRico Music System')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp();
        if (!message.member.voice.channel) return message.channel.send(embednoinvoice);
    
        if (!args[0]) return message.channel.send(embedspecify);
    
        client.player.play(message, args.join(" "))
        }
    };
     