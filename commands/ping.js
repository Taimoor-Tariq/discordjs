const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!').toJSON(),
    async execute(client, interaction) {
        await interaction.reply('Pong!');
    },
};
