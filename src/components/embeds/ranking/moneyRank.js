// import custom functions
const createEmbed = require('../../../utils/embed');

// return an embed with the page
module.exports = function createMoneyRankPage(client, user) {
    return (
        createEmbed(user)
            .addFields([{
                name: '---',
                value: '---'
            }])
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1496295806339383440/Money_Cash_GIF_-_Money_Cash_-_Discover__Share_GIFs.gif?ex=6a1c1f50&is=6a1acdd0&hm=755e5b0740afd2bcbab5713c06f11a4db5410e17f5503b90d0e66d785230762b&')
    );
};