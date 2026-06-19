// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createCommandPage(user) {
    return (
        createEmbed(user)
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1496841750462074880/1_Awi84KRY_5cFk9P0cIhtrw.gif?ex=6a35d6c3&is=6a348543&hm=ee7123669181174e51e6cbfb854e4a7e19ac7a7baf933ca9d067e27a1e90aba2&')
    );
};