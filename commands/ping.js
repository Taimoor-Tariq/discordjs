module.exports = {
	name: 'ping',
	description: 'Replies with Pong!',
	async execute(client, message, args) {
		message.channel.send({ content: "Pong!", ephemeral: true });
	},
};