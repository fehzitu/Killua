// import custom functions
const createEmbed = require('../../utils/embed.js');

// return an embed with the page
module.exports = function createHelpPage(user) {
    return (
        createEmbed(user)
        .addFields([{
            name: '🥀 Em **qualquer servidor que eu estiver** basta **você utilizar** meu comando base pra **abrir o menu e interagir comigo** no chat.',
            value: '**👉 comando base "k.menu"**'
        }])
        .setImage('https://cdn.discordapp.com/attachments/1478819111906705430/1491724642799583322/images.jpeg?ex=69d8bc55&is=69d76ad5&hm=20d6a24780e97cda50b1b41b0721d16a856c588b144551bd7c3e26dfb7b3fb14&')
        .setTimestamp()
    );
};