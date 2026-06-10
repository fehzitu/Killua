// import custom functions
const createEmbed = require('../../../utils/components/embed');
const sortByCategory = require('../../../utils/custom/sortByCategory.js');

// return an embed with the page
module.exports = function createLevelRankPage(client, user) {
    // get the top 5
    const ranking = sortByCategory(client.usersData, 'stats.messages').slice(0, 5);

    // clean list
    const list = ranking.map(user => `👤 **<@${user.id}>**\n└─ 💬 **Mensagens: ${user.stats.messages}** | 🤖 **Comandos: ${user.stats.commands}**`).join('\n') || 'Nenhum usuário encontrado.';

    return (
        createEmbed(user)
            .addFields([{
                name: '**💬 Top mensagens**',
                value: `\u200B\n${list}\n\n✨️ **Parabéns aos ${ranking.length} mais falantes!**`
            }])
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1496256443790266398/Animacoes_Legais.gif?ex=69e938e7&is=69e7e767&hm=5587a339c9ec632888b5f0e14541e3bbe245740da38283b6973e26809e13a9d3&')
    );
};