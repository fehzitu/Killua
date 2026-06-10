// import custom functions
const createEmbed = require('../../../utils/components/embed');
const sortByCategory = require('../../../utils/custom/sortByCategory.js');

// return an embed with the page
module.exports = function createLevelRankPage(client, user) {
    // get the top 5
    const ranking = sortByCategory(client.usersData, 'rpg.level').slice(0, 5);

    // clean list
    const list = ranking.map(user => `👤 **<@${user.id}>**\n**↗️ ${user.rpg.level} | 📈 ${user.rpg.totalXp}**`).join('\n') || 'Nenhum usuário encontrado.';

    return (
        createEmbed(user)
            .addFields([{
                name: '**📈 Top nível**',
                value: `${list}\n\n✨️ **Parabéns aos ${ranking.length} mais upados!**`
            }])
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1496180164088958976/Animated_bar_chart.gif?ex=69e8f1dc&is=69e7a05c&hm=0ef944418ed41d4f37b90c3345a1da453a87ca4e1f7dccf1421cd37270f68493&')
    );
};