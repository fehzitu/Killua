// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createInteractionSelectorPage(user, target) {
    return (
        createEmbed(user)
            .addFields([{
                name: `**🫣 ${user.username} ta afim de interagir com ${target.username}**`,
                value: '**🤭 Escolha o que fazer!**'
            }])
            //.setImage('')
    );
};