const Discord = require('discord.js');
const Command = require('../../structures/Command');
const answers = [
    'Oh hell yeah',
    'Hello no',
    'Yes I guess ?',
    'Probably wrong', 
    'You never know',
    'I guess ?',
    'Well tbh I don\'t know',
    'Umm maybe ?',
    'Nah',
    'Yup',
    'I have a doubt',
    'Cannot predict now',
    'I can see it'
]

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: '8ball',
        aliases: [ '8ball' ],
        description: 'Tom&Jerry Tom calling Meme image',
        category: 'Fun',
        usage: '<text>',
        examples: [ 'achievement LOL WHATS UP??' ],
        cooldown: 5
      });
    

    run: async (client, message, args) => {
        const question = args.join(' ');
        if (!question) 
        return message.reply('Please provide a question to ask');

        const embed = new Discord.MessageEmbed()
          .setTitle('8-Ball')
          .addField('Question', `\`\`\`${question}\`\`\``)
          .addField('Answer', `\`\`\`${answers[Math.floor(Math.random() * answers.length)]}\`\`\``)
          .setFooter(`Asked by ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
        message.channel.send(embed);
    }
   
   }
     }