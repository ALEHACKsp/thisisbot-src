const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
const Discord = require('discord.js');
const webhookClient = new Discord.WebhookClient('842446186111303720', 'xnSNJomZ05ro7YUHN_GTRCjZ58FroG_6z2qLwX7tT1EV_ClHo2zGW6PEnxg1L9A-5a8b');
const chalk = require('chalk');
const config = require('./../config.json');

const myFormat = printf(({ level, message, label, timestamp }) => {
  webhookClient.send(`${timestamp} [${label}] ${message}`)
  return `${timestamp} [${level}] [${chalk.cyan(label)}] ${message}`;
});

const myCustomLevels = {
  levels: { 
    error: 0, 
    warn: 1, 
    info: 2, 
    http: 3,
    verbose: 4, 
    debug: 5, 
    silly: 6 
  }
};

const logger = createLogger({
  levels: myCustomLevels.levels,
  format: combine(
    format.colorize(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: './assets/logs/Pogy.log' }),
  ],
});

module.exports = logger;