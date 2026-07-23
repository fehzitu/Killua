// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createInteractionPage(user) {
    return (
        createEmbed(user)
            .addFields([{
                name: '**🎮 Menu de jogos**',
                value: '**💸: Roleta - ``Roleta do casino``\n\n😝 Ta afim de fazer algumas apostas e lucrar um pouco? Cada valor arrecadado aqui é apenas virtual mas poderá ser trocado por dinheiro real no futuro!**'
            }])
            .setImage('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWJpN3hqM3kxaG5pZHRvZmNnd2psMjJvdXpoanQwOTJ2bHl2cHNidSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZEkQofMp9jWhvPHj8C/giphy.gif')
    );
};