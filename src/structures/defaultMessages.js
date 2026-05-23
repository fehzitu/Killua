// import custom functions
const createEmbed = require('../utils/embed');

// level msg
function createLevelUpMessage(user, level) {
    return (
        createEmbed(user, level)
            .addFields([{
                name: '🎉 **Parabéns!**',
                value: `**${user} subiu para o nível ${level}**!`
            }])
    );
};

// achievements msg
function createAchievementsMessage(user, achievement) {
    return (
        createEmbed(user, achievement)
            .addFields([{
                name: `🏆 **Conquista desbloqueada!**\n>>> ${achievement.icon} **${achievement.name}**\n${achievement.description}`,
                value: `>>> ✨ +${achievement.reward?.xp || 0} Xp\n💸 +R$${achievement.reward?.money || 0}`
            }])
    );
};

// create an messages list
module.exports = {
    createLevelUpMessage,
    createAchievementsMessage
};