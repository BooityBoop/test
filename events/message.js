const Discord = require('discord.js');
const ms = require("ms");
module.exports.run = async (client, msg) => {
    let prefix = process.env.prefix;
    let messageArray = msg.content.split(" ");
    let args = messageArray.slice(1);
    if(msg.guild){
if(msg.author.id === process.env.OI || msg.author.id === process.env.OI2){
        if(msg.content.startsWith(`m!gstart`)){
        
            setInterval(async() => {
            msg.guild.channels.find(c => c.name === "mining").send(`m!mine`)
            }, args[0] ? args[0] : 60000)
            msg.channel.send(`Ok, I'll start mining in ${ms(args[0] ? args[0] : 60000)}`)
            client.user.setActivity({name: "Mining Internal ${ms(args[0] ? args[0] : 60000)}"});
        }
        if(msg.content.startsWith(`${prefix}start`)){
            setInterval(async() => {
            msg.guild.channels.find(c => c.name === "mining").send(`m!mine`)
            }, args[0] ? args[0] : 60000)
            msg.channel.send(`Ok, I'll start mining in ${ms(args[0] ? args[0] : 60000)}`)
            client.user.setActivity({name: "Mining Internal ${ms(args[0] ? args[0] : 60000)}"});
}else
        if(msg.content.startsWith(`${prefix}help`)){
        return msg.channel.send(`\`\`\`asciidoc\n[Commands]\n\n[Help]\n= ${prefix}help =\n\n[Stop]\n= ${prefix}stop =\n\n[Say]\n= ${prefix}s <Args> =\n\n[Profile]\n= ${prefix}i =\n\n[Sell All]\n= ${prefix}a =\n\n[Vote]\n= ${prefix}v =\n\n[Crate]\n= ${prefix}c =\n\n[Mine]\n= ${prefix}m =\n\n[Trade Start]\n= ${prefix}t @user =\n\n[Trade Confirm]\n= ${prefix}tc =\n\n[Trade Set]\n= ${prefix}ts <Type> <Amount> =\n\n[Trade Set Money]\n= ${prefix}tsm <Amount> =\`\`\``)
}else
        if(msg.content.startsWith(`${prefix}stop`)){
        process.exit(1)
}else
        if(msg.content.startsWith(`${prefix}e`)){ // = <prefix>say <Args>
        msg.channel.send(args.join(" "))
}else
        if(msg.content.startsWith(`${prefix}i`)){ // = m!inv
        msg.channel.send(`m!inv`)
}else
        if(msg.content.startsWith(`${prefix}a`)){// = m!sell all
        msg.channel.send(`m!sell all`)
}else
        if(msg.content.startsWith(`${prefix}v`)){ // = m!vote
        msg.channel.send("m!vote")
}else
        if(msg.content.startsWith(`${prefix}c`)){ // = m!crate
        msg.channel.send(`m!crate`)
}else
        if(msg.content.startsWith(`${prefix}m`)){ // = m!mine
        msg.channel.send(`m!mine`)
}else

    //Trading stuff
        if(msg.content.startsWith(`${prefix}t ${msg.mentions.users.first() ? msg.mentions.users.first() : msg.author}`)){ // = m!trade <message author>
        return msg.channel.send(`m!trade ${msg.mentions.users.first() ? msg.mentions.users.first() : msg.author}`);
}else
        if(msg.content.startsWith(`${prefix}tc`)){ // = m!trade confirm
        return msg.channel.send(`m!trade confirm`)
}else
        if(msg.content.startsWith(`${prefix}ts`)){ // = m!trade set <args0> <args1>
        return msg.channel.send(`m!trade set ${args[0]} ${args[1]}`)
}else
        if(msg.content.startsWith(`${prefix}tm`)){ // = m!trade set money <args0>
        return msg.channel.send(`m!trade set money ${args[0]}`)
}else
    if(msg.content.startsWith(`${prefix}sb`)){
    return msg.channel.send(`m!shop bonus ${args[0] ? args[0] : ''}`)
}else
    if(msg.content.startsWith(`${prefix}se`)){
    return msg.channel.send(`m!shop enchant ${args[0] ? args[0] : ''}`)
}else
    if(msg.content.startsWith(`${prefix}sp`)){
    return msg.channel.send(`m!shop pickaxe ${args[0] ? args[0] : ''}`)
}
}
    if(msg.author.id === "492969308201418756"){
    
    if(msg.content.includes("You do not have enough money.")) return msg.channel.send(`m!sell all`)
    
    if(msg.content.includes('m!verify')){
        let text = msg.content.replace(`<@${process.env.OI}> » Anti AFK check. Complete this addition: `, "").replace('`', '').replace('`', '').replace('Type the command `m!verify <answer>`.', '')
        let answer = await eval(text)
        return msg.channel.send(`m!verify ${answer}`);
}else
    
    if(msg.content.includes("m!repair") && msg.content.includes(process.env.OI))return msg.channel.send(`m!repair`)
}
}
}
