// import custom functions
const createEmbed = require('../../../utils/components/embed');
const sortByCategory = require('../../../utils/custom/sortByCategory.js');

// return an embed with the page
module.exports = function createMoneyRankPage(client, user) {
    // get the top 5
    const ranking = sortByCategory(client.usersData, 'rpg.money').slice(0, 5);

    // clean list
    const list = ranking.map(user => `👤 **<@${user.id}>**\n└─ 💸 **Saldo: R$${user.rpg.money}** | 👤 **Cargo: ${user.rpg.role}**`).join('\n') || 'Nenhum usuário encontrado.';

    return (
        createEmbed(user)
            .addFields([{
                name: '**💰 Top dinheiro**',
                value: `\u200B\n${list}\n\n✨️ **Parabéns aos ${ranking.length} mais ricos!**`
            }])
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1496295806339383440/Money_Cash_GIF_-_Money_Cash_-_Discover__Share_GIFs.gif?ex=6a1c1f50&is=6a1acdd0&hm=755e5b0740afd2bcbab5713c06f11a4db5410e17f5503b90d0e66d785230762b&')
    );
};