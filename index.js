const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const { BOT_TOKEN, BOT_PREFIX } = require('./config');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_WEBHOOKS,
    ],
});

client.commands = new Collection();
client.appCommands = new Collection();

console.log(` \nLoading Commands and events:\n `);

console.log('• Commands:');
fs.readdirSync('./commands/')
    .filter((file) => file.endsWith('.js'))
    .forEach((file) => {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
        console.log(` - Loaded → ${BOT_PREFIX}${command.name}`);
    });
console.log(' ');

console.log('• Events:');
fs.readdirSync('./events/')
    .filter((file) => file.endsWith('.js'))
    .forEach((file) => {
        const event = require(`./events/${file}`);
        if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
        else client.on(event.name, (...args) => event.execute(...args, client));
        console.log(` - Loaded → ${event.name}`);
    });
console.log(' ');

client.login(BOT_TOKEN);
