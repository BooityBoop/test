const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            memberName: 'stop',
            aliases: [`s`],
            examples: [`${client.commandPrefix}stop`],
            description: 'N/A',
            group: 'self'
        });
    };
    async run(message) {
    this.client.destroy();
    };
};