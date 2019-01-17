const chalk = require('chalk');
const re = require('discord.js').RichEmbed;
const Discord = require("discord.js");
module.exports.run = async (client) => {
console.log(chalk.default.green("[Disconnected]") + ` ${client.user.tag} is now ${client.user.presence.status} in ${client.guilds.size} Servers`);
client.user.setStatus("invisible");
 let e = new re()
 .setAuthor(client.user.tag, client.user.displayAvatarURL)
 .setTitle(`Disconnected`)
 .setTimestamp()
 .setColor(`#FF0000`)
 let hook = new Discord.WebhookClient(process.env.wi, process.env.wt);
 hook.send(e)
}
