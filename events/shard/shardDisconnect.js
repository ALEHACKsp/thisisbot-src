const Event = require('../../structures/Event');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const logger = require('../../utils/logger');
const webhookClient = new Discord.WebhookClient('842861468047376464', 'Za7hVxH0cxGafxovX-rVfMGOmXSZnY8aZI3Id2G_c5zre6bLvWaqIMq-eDiUd5BpSH1R');

module.exports = class extends Event {
  constructor(...args) {
    super(...args)
  }

  async run() {
    logger.error(`Shard ${this.client.shard.ids - 1 + 2}/${this.client.shard.count} has disconnected`, { label: `Shard` })
    


      const embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`ThisIsBot: [${this.client.shard.ids - 1 + 2}/${this.client.shard.count}] Disconnected`)
        .setTimestamp()
      
      webhookClient.send(embed)
    
  }
}