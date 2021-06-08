const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Logging = require('../../database/schemas/logging.js')

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: '4k',
        aliases: [ '4k'],
        description: 'Send a 4k Nude ',
        category: 'NSFW',
        usage: '4k',
        examples: ['4k', '4k'],
        guildOnly: true,
      });
    }

    async run(message, args) {

let client = message.client



var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send('This channel is not a NSFW channel') 

    var lo = new Discord.MessageEmbed()
                .setDescription(`Please wait`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: '4k'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage:\n**[...](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter('Please wait for image to load')

         



m.edit(embed_nsfw);          
});
});
}
}