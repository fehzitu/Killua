// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createKissPage(user) {
    return (
        createEmbed(user)
            .addFields([{
                name: `**🫣 ${user.username} ta afim de dar um beijinho em alguém**`,
                value: '**🤭 Escolha o sortudo(a)!**'
            }])
            .setImage('https://glq.pages.dev/posts/high_quality_gifs/assets/bad_ffmpeg_command.gif')
    );
};