// import custom functions
const createEmbed = require('../../utils/components/embed');

// return an embed with the page
module.exports = function createInfoPage(client, user) {
    // bot stats
    const totalUsers = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);
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
                value: `⏳ Tempo ativo: **${formattedUptime}**`,
                inline: true
            },
                {
                    name: `🏰 Comunidade: https://discord.gg/Wpgu4qXWUk`,
                    value: `🏠 Servidores: **${totalGuilds}** | 👥 Usuários: **${totalUsers}**`,
                    inline: true
                })
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1491764536322035802/yuliowo.gif?ex=69d8e17d&is=69d78ffd&hm=93ba3d94e4fa0d41eacb0ffc689604c26d884ee632a491e54c9c3e9b6cfd9e9f')
    );
};