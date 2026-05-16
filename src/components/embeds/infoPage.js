// import custom functions
const createEmbed = require('../../utils/embed.js');

// return an embed with the page
module.exports = function createInfoPage(user, client) {
    // bot stats
    const totalUsers = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);
    const totalChannels = client.channels.cache.size;
    const totalGuilds = client.guilds.cache.size;

    // uptime format
    const uptime = Math.floor(client.uptime / 1000);
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = uptime % 60;

    const formattedUptime = `${hours}h ${minutes}m ${seconds}s`;

    return (
        createEmbed(user)
        .addFields({
                name: `👑 Nome: **${client.user.tag}**`,
                value: `⏳ Uptime: **${Math.floor(client.uptime / 1000)} seconds**\n📡 Ping: **${client.ws.ping}ms**`,
                inline: true
            },
                {
                    name: `🏠 Servidores: **${totalGuilds}**`,
                    value: `📚 Canais: **${totalChannels}**\n👥 Usuários: **${totalUsers}**`,
                    inline: true
                })
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1491764536322035802/yuliowo.gif?ex=69d8e17d&is=69d78ffd&hm=93ba3d94e4fa0d41eacb0ffc689604c26d884ee632a491e54c9c3e9b6cfd9e9f')
            .setTimestamp()
    );
};