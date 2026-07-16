// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createInteractionPage(user) {
    return (
        createEmbed(user)
            .addFields([{
                name: '**😝 Menu de interações**',
                value: '**🤭 Interagir com outra pessoa é legal certo? Então escolha uma pessoa pra criar uma interação!\n\n🧿 : Cada interação feita a outro usuário muda sua personalidade e seu karma**'
            }])
            .setImage('https://glq.pages.dev/posts/high_quality_gifs/assets/bad_ffmpeg_command.gif')
    );
};