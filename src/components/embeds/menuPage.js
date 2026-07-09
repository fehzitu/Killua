// import custom functions
const createEmbed = require('../../utils/components/embed');

// return an embed with the page
module.exports = function createMenuPage(user) {
    return (
        createEmbed(user)
            .addFields([{
                name: '**💫 Menu principal**',
                value: '**👤: Perfil - ``Acessa os dados do perfil``\n🎮: Jogos - ``Lista de jogos`` { OFF }\n😝: Interações - ``Interação entre usuários`` { DEV }\n📄: Comandos - ``Lista de comandos``\n🏆: Ranking - ``Lista de ranking``\n⚙️: Informações - ``Infos do bot``\n📋: Ajuda - ``Receba ajuda sobre o bot``\n❓: Suporte - ``Suporte do bot``\n📡: Ping - ``Ver o ping do bot``\n\n❕️: Cada interação (botão, seletor ou modal) gera um pouco de xp pro usuário**'
            }])
            .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1492176849478881481/6D1510C7-334E-4562-BA2F-7AC458BE2AF2.gif?ex=69dbb2fc&is=69da617c&hm=de7e998bd6a0ae9d05ec1cba4480b5f9faf69a1b3d5da212775d70d863302e3e&')
    );
};