const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Logging = require('../../database/schemas/logging.js')

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'porn',
        aliases: [ 'porn'],
        description: 'Send a Porn',
        category: 'NSFW',
        usage: 'porn',
        examples: ['porn', 'porn'],
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

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'pgif'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage:`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter('Please wait for image to load')

         



m.edit(embed_nsfw);          
});
});
}
}