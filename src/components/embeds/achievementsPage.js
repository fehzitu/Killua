// import custom functions
const createEmbed = require('../../utils/embed');

// import achievements list
const achievementsList = require('../../structures/achievementsList');

// return an embed with the page
module.exports = function createAchievementsPage(user, achievementIndex) {
    // get the achievement
    const achievement = achievementsList[achievementIndex];

    return (
        createEmbed(user)
            .addFields([{
                name: `🏆 **Detalhes da conquista:**\n>>> 📝 ${achievement.name}\n${achievement.goal}`,
                value: `🤑 Recompensas:\n>>> ✨ +${achievement.reward?.xp || 0} Xp\n💸 +R$ ${achievement.reward?.money || 0}`
            }])
    );
};