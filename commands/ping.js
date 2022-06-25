async function main(client, message, args) {
    message.channel.send({ content: 'Pong!' });
}

module.exports = {
    name: 'ping',
    description: 'Replies with Pong!',
    execute: main,
};
