// import custom functions
const createEmbed = require('../../utils/embed');

// return an embed with the page
module.exports = function createPingPage(client, user) {
    return (
        createEmbed(user, tag = true)
            .addFields([{
                name: '🏓 **Pong!**',
                value: `📡 Api: **${client.ws.ping}ms**`
            }])
            .setImage('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejdwZHowNDRnMjZ4dHBkcWNpbTA2NDRibjdpamliNmNmcDZyaTBoaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2jmnf6gznuL8Q/giphy.gif')
    );
};