// import custom functions
const createEmbed = require('../utils/embed');

// level msg
function createLevelUpMessage(user, level) {
    return (
        createEmbed(user, level)
            .addFields([{
                name: '🎉 **Parabéns!**',
                value: `**${user} subiu para o nível ${level}**!`
            }]);
    );
};

// create an messages list
module.exports = {
    createLevelUpMessage
};