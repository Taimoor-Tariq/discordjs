module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        // console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

        // INTERACTION TYPES:
        // isButton
        // isCommand
        // isModalSubmit
        // isSelectMenu
        // isMessageComponent

        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;

            try {
                await command.execute(client, interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: 'There was an error while executing this command!',
                    ephemeral: true,
                });
            }
        } else {
            await interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true,
            });
        }
    },
};
