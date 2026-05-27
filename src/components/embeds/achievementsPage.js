// import custom functions
const createEmbed = require('../../utils/embed');
const ensureProfile = require('../../utils/ensureProfile');

// import achievements list
const achievementsList = require('../../structures/achievementsList');

// return an embed with the page
module.exports = function createAchievementsPage(user, achievementIndex) {
    // get the user profile
    const profile = ensureProfile(client, user);

    // get the achievement
    const achievement = achievementsList[achievementIndex];
    
    // check if user have this achievement
    const obtained = '...'; // finish later

    return (
        createEmbed(user)
            .addFields([{
                name: `🏆 **Detalhes da conquista:**\n>>> 📝 ${achievement.name}\n${achievement.goal}`,
                value: `🤑 **Recompensas:**\n> ✨ +${achievement.reward?.xp || 0} Xp\n> 💸 +R$ ${achievement.reward?.money || 0}\n🫡 **Obtida?**\n${obtained}`
            }])
    );
};