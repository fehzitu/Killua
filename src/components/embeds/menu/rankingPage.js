// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createRankingPage(user) {
    return (
        createEmbed(user)
            .addFields([{
                name: '**🏆 Rankings**',
                value: '**💰: Top dinheiro - ``Veja os 5 mais ricos``\n📈: Top nivel - ``Veja os 5 com mais níveis``\n💬: Top mensagens - ``Veja os 5 mais hypados``**'
            }])
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1492308028995928134/7C65091E-1577-4AE5-ABFB-31A55260A19D.gif?ex=69dadba7&is=69d98a27&hm=42efbc93ef98401702c281afd82e5ee7501499ee7ec6a435c7fc7428981a2ae0&')
    );
};