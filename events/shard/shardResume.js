const Event = require('../../structures/Event');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const logger = require('../../utils/logger');
const webhookClient = new Discord.WebhookClient('842861101066092554', 'hCODGqsFpBDMzovyLHKAqcHtplXJpsLM4GbHFADZxCyrRT-YPIM7dUWfeGJz6KWeYaFQ');

module.exports = class extends Event {
  constructor(...args) {
    super(...args)
  }

  async run() {
    logger.info(`Shard ${this.client.shard.ids - 1 + 2}/${this.client.shard.count} has resumed`, { label: 'Shard' })


      const embed = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`ThisIsBot: [${this.client.shard.ids - 1 + 2}/${this.client.shard.count}] Resumed`)
        .setTimestamp()
      
      webhookClient.send(embed)
    
  }
}