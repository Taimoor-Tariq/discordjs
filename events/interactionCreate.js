async function main(interaction, client) {
    if (interaction.isCommand()) {
        if (!client.slashCommands.has(interaction.commandName)) return;
        client.slashCommands.get(interaction.commandName).execute(interaction, client);
    }

    else if (interaction.isButton()) {
        switch (interaction.customId) {
            case "BUTTON_ID":
                
                break;
        }
    }

    else if (interaction.isSelectMenu()) {
        switch (interaction.customId) {
            case "SELECT_ID":
                
                break;
        }
    }
}

module.exports = {
    name: 'interactionCreate',
    execute: main
};