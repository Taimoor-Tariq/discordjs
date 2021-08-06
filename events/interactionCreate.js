module.exports = {
	name: 'interactionCreate',
	execute(interaction, client) {
		if (interaction.isCommand()) {
			if (!client.slashCommands.has(interaction.commandName)) return;
			client.slashCommands.get(interaction.commandName).execute(interaction, client);
		}

		else if (interaction.isButton()) {
			switch (interaction.customID) {
				case "BUTTON_ID":
					
					break;
			}
		}

		else if (interaction.isSelectMenu()) {
			switch (interaction.customID) {
				case "SELECT_ID":
					
					break;
			}
		}
	}
};