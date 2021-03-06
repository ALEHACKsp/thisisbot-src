const Event = require('../../structures/Event');
const Discord = require('discord.js');
const logger = require('../../utils/logger');
const Guild = require('../../database/schemas/Guild');
const metrics = require('datadog-metrics');
const Logging = require('../../database/schemas/logging')
const webhookClient = new Discord.WebhookClient('844258739766820954', 'ubjBkEhAadiapW_n1rUhkyibhHjAnamlXo8zxW60lWTBbgA34dZ5TbZMNmFa-9IshnLK');
const welcomeClient = new Discord.WebhookClient('844258739766820954','ubjBkEhAadiapW_n1rUhkyibhHjAnamlXo8zxW60lWTBbgA34dZ5TbZMNmFa-9IshnLK');
module.exports = class extends Event {

  async run(guild) {
    Guild.findOneAndDelete({
      guildId: guild.id,
    }, (err, res) => {
      if (err) console.log(err)
      logger.info(`Left from "${guild.name}" (${guild.id})`, { label: 'Guilds' })
    })

    const welcomeEmbed  = new Discord.MessageEmbed()
   .setColor(`RED`)
    .setTitle('Leave Server')
    .setThumbnail(`https://thisisbot.tk/logo`)
    .setDescription(`ThisisBot left a Server!`)
    .addField(`Server Name`, `\`${guild.name}\``, true)
    .addField(`Server ID`, `\`${guild.id}\``, true)
    .setFooter(`${this.client.guilds.cache.size} guilds `,  'https://thisisbot.tk/logo.png');

welcomeClient.send({
   username: 'ThisIsBot',
        avatarURL: 'https://thisisbot.tk/logo.png',
        embeds: [welcomeEmbed],
})

Logging.findOneAndDelete({
      guildId: guild.id,
    }).catch(()=>{});

if(config.datadogApiKey){
      metrics.init({ apiKey: this.client.config.datadogApiKey, host: 'pogy', prefix: 'pogy.' });
      metrics.increment('guildDelete');
}

      const embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription(`I have left the ${guild.name} server.`)
      .setFooter(`Lost ${guild.members.cache.size - 1} members • I'm now in ${this.client.guilds.cache.size} servers..\n\nID: ${guild.id}`)
      .setThumbnail(guild.iconURL({ dynamic: true }) ? guild.iconURL({ dynamic: true }) : `https://guild-default-icon.herokuapp.com/${encodeURIComponent(guild.nameAcronym)}`)
      .addField('Server Owner', `${guild.owner} / ${guild.ownerID}`)
    
      webhookClient.send({
        username: 'ThisIsBot',
        avatarURL: 'https://thisisbot.tk/logo.png',
        embeds: [embed],
      });
    
  }
};