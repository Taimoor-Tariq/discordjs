module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        require('../modules/slash-loader')(client).then(() => {
            console.log(`\nReady! Logged in as ${client.user.tag}`);
        });
    }
};