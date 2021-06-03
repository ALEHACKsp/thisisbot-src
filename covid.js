const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Logging = require('../../database/schemas/logging.js')
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');


module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'covid',
        aliases: [ 'covid'],
        description: 'You can see all covid Infos',
        category: 'Information',
        usage: 'covid',
        examples: ['covid', 'covid'],
        guildOnly: true,
      });
    }

    async run(message, args) {


let countries = args.join(" ");
        
if(!countries) return message.channel.send(`Error Provide a country !!`);

if(args[0] === "all"){
    fetch(`https://covid19.mathdro.id/api`)
    .then(response => response.json())
    .then(data => {
        let confirmed = data.confirmed.value.toLocaleString()
        let recovered = data.recovered.value.toLocaleString()
        let deaths = data.deaths.value.toLocaleString()

        const embed = new Discord.MessageEmbed()
        .setTitle(`Worldwide COVID-19 Stats 🌎`)
        .addField('Confirmed Cases', confirmed)
        .addField('Recovered', recovered)
        .addField('Deaths', deaths)

        message.channel.send(embed)
    })
} else {
    fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
    .then(response => response.json())
    .then(data => {
        let confirmed = data.confirmed.value.toLocaleString()
        let recovered = data.recovered.value.toLocaleString()
        let deaths = data.deaths.value.toLocaleString()

        const embed = new Discord.MessageEmbed()
        .setTitle(`COVID-19 Stats for **${countries}**`)
        .addField('Confirmed Cases', confirmed)
        .addField('Recovered', recovered)
        .addField('Deaths', deaths)
        .setFooter(`Requested by ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        message.channel.send(embed)
    }).catch(e => {
        return message.channel.send(`Error Invalid country provided`)
    })
}
}
}