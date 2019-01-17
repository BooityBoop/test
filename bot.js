const {CommandoClient} = require('discord.js-commando');
const Discord = require('discord.js');
const chalk = require("chalk");
const path = require('path');
const fs = require('fs');
const client = new CommandoClient({
    commandPrefix: '!',
    disableEveryone: true,
    fetchAllMembers: false,
    owner: [process.env.OI, process.env.OI2],
    selfbot: process.env.ANSWER,
    commandEditableDuration: 100000
});
client.login(process.env.token);
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    console.log(chalk.default.magenta("[Events]") + ` Loaded ${files.length} Events!`)
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});
client.registry
    .registerDefaultTypes()
    .registerGroups([
        ["self", "Self Commands"]
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: true,
        prefix: true,
        ping: true,
        eval_: true,
        commandState: true
    })
    .registerCommandsIn(path.join(__dirname, 'commands'))
