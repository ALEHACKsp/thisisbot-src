const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Logging = require('../../database/schemas/logging.js')
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'roleinfo',
        aliases: [ 'roleinfo'],
        description: 'You can see all Role Infos',
        category: 'Information',
        usage: 'roleinfo',
        examples: ['roleinfo @owner', 'roleinfo @owner'],
        guildOnly: true,
        botPermission: ['MANAGE_MESSAGES'],
        userPermission: ['MANAGE_MESSAGES'],
      });
    }

    async run(message, args) {

let client = message.client



if (!args[0]) return message.channel.send("**Please Enter A Role!**")
let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
if (!role) return message.channel.send("**Please Enter A Valid Role!**");

const status = {
    false: "No",
    true: "Yes"
}

let roleembed = new MessageEmbed()
    .setColor("#2F3136")
    .setTitle(`Role Info: \`[  ${role.name}  ]\``)
    .setThumbnail(message.guild.iconURL())
    .addField("**ID**", `\`${role.id}\``, true)
    .addField("**Name**", role.name, true)
    .addField("**Hex**", role.hexColor, true)
    .addField("**Members**", role.members.size, true)
    .addField("**Position**", role.position, true)
    .addField("**Mentionable**", status[role.mentionable], true)
    .setFooter(message.member.displayName, message.author.displayAvatarURL(), true)
    .setTimestamp()

message.channel.send(roleembed);
}
}