// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createInteractionPage(user) {
    return (
        createEmbed(user)
            .addFields([{
                name: '**😝 Menu de interações**',
                value: '**🤭 Interagir com outra pessoa é legal certo? Então escolha o tipo de interação e com quem será feita!\n\n❕️: Cada interação feita a outro usuário muda sua personalidade e seu karma**'
            }])
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1522274566934757467/7210b8c6a25afa21e8b8b92f528b9383.gif?ex=6a47e02b&is=6a468eab&hm=75bf8798ef8177d054009e44203d155aca14c524d8e96a2fcfe4ff409660fc7c&')
    );
};