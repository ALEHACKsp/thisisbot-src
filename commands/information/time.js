const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Logging = require('../../database/schemas/logging.js')
const moment = require('moment-timezone');
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'time',
        aliases: [ 'time'],
        description: 'You can see timezones',
        category: 'Information',
        usage: 'time',
        examples: ['time', 'time'],
        guildOnly: true,
      });
    }

    async run(message, args) {

let client = message.client




let now = moment();
let gameTime = now.clone().tz('Asia/Shanghai');

const embed = new MessageEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle('🕰️ **Times:**')
    .setDescription('Times across the world')
    .addFields(
        {
            name: 'Game',
            value: gameTime.format('hh:mm A'),
            inline: true,
        },
        {
            name: 'California',
            value: gameTime.clone().tz('America/Los_Angeles').format('hh:mm A'),
            inline: true,
        },
        {
            name: 'New York',
            value: gameTime.clone().tz('America/New_York').format('hh:mm A'),
            inline: true,
        },
        {
            name: 'London',
            value: gameTime.clone().tz('Europe/London').format('hh:mm A'),
            inline: true,
        },
        {
            name: 'Berlin',
            value: gameTime.clone().tz('Europe/Berlin').format('hh:mm A'),
            inline: true,
        },
        {
            name: 'Brussels',
            value: gameTime.clone().tz('Europe/Brussels').format('hh:mm A'),
            inline: true,
        },
        {
            name: 'India',
            value: gameTime.clone().tz('Asia/Colombo').format('hh:mm A'),
            inline: true,
        },
        {
            name: 'New Zeland',
            value: gameTime.clone().tz('Pacific/Auckland').format('hh:mm A'),
            inline: true,
        },
        {
            name: 'Sydney',
            value: gameTime.clone().tz('Australia/Sydney').format('hh:mm A'),
            inline: true,
        },
        {
            name: 'China',
            value: gameTime.clone().tz('Asia/Shanghai').format('hh:mm A'),
            inline: true,
        },
        {
            name: 'Tokyo',
            value: gameTime.clone().tz('Asia/Tokyo').format('hh:mm A'),
            inline: true,
        }
    )
    .setFooter(`https://thisisbot.tk `)
    .setTimestamp();



    return message.channel.send(embed);
}
}