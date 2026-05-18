// import custom functions
const createEmbed = require('../../utils/embed');

// return an embed with the page
module.exports = function createHelpPage(user) {
    return (
        createEmbed(user)
            .addFields([{
                name: '🥀 Em **qualquer servidor que eu estiver** basta **você utilizar** meu comando base pra **abrir o menu e interagir comigo** no chat.',
                value: '**👉 comando base "k.menu" ou "/menu"**'
            }])
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1501199433201618984/Killua_Hunter_X_Hunter_GIF_-_Killua_Hunter_X_Hunter_Killua_Lightning_-_Descobrir_e_Compartilhar_GIFs.gif?ex=69fb346b&is=69f9e2eb&hm=d8b93ace4e22f03f6fc4698e2c190c996614c72ea9c9dc9b9b33b5c42eb3e7b3&')
    );
};