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
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1524995620467638372/desconhecido.gif?ex=6a51c658&is=6a5074d8&hm=d56e97642b5441d6a59850f5cb2113e84aa3dce7c66f4bf7cf4cfa77ae2c39c1&')
    );
};