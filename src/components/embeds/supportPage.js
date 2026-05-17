// import custom functions
const createEmbed = require('../../utils/embed.js');

// return an embed with the page
module.exports = function createSupportPage(user) {
    return (
        createEmbed(user)
            .addFields([{
                name: '**🤖 Ainda estou em desenvolvimento então pode ser que algo de errado ou inesperado aconteça.\nSe for o caso informe:**\n<@830634043560296468> | <@1335722284576407562>',
                value: '**☕ Bora tomar um café?\n__https://discord.gg/Wpgu4qXWUk__**'
            }])
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1491798480216264824/93f04b4b1103cc4e6410bb4f831acb6c.gif?ex=69d90119&is=69d7af99&hm=ca14d33797d593d0914af41ff129a00fc1f87c8ab1ce3a564058456fc749bb34&')
            .setTimestamp()
    );
};