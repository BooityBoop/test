const {Command} = require('discord.js-commando'),
Discord = require('discord.js');
module.exports = class NCommand extends Command {
         constructor(client) {
           super(client, {
             name: 'go',
             memberName: 'go',
             aliases: [`g`],
             examples: [`${client.commandPrefix}go`],
             description: 'N/A',
             group: 'self'
})
}
        async run(message) {
        setInterval(async () => {
          this.client.channels.get(process.env.mine).send('m!mine');
        }, 60000);
}
}