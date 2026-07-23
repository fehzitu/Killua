// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createRoulettePage(user) {
    return (
        createEmbed(user)
            .addFields([{
                name: '**💸 Apostar na roleta?**',
                value: `**Selecione o valor, a cor e boa sorte!**`
            }])
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1528958555464401007/desconhecido.gif?ex=6a637cde&is=6a622b5e&hm=2973bdde398f7d44bd3c74450424a01d859998b72c70cc851f7f2cd02b9b41cc&')
    );
};