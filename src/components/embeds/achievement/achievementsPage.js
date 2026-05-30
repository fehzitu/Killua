// import custom functions
const createEmbed = require('../../../utils/embed');
const ensureProfile = require('../../../utils/ensureProfile');

// import achievements list
const achievementsList = require('../../../structures/achievementsList');

// return an embed with the page
module.exports = function createAchievementsPage(client, user, achievementIndex) {
    // get the user profile
    const profile = ensureProfile(client, user);

    // get the achievement
    const achievement = achievementsList[achievementIndex];
    
    // check if user have this achievement
    const obtained = profile.honor.achievements.includes(achievement.id)? '> 🟢 Sim': '> 🔴 Não';

    return (
        createEmbed(user)
            .addFields([{
                name: `📝 **${achievement.name}**\n> ${achievement.goal}`,
                value: `✨️ **Raridade:**\n> ${achievement.rarity}\n🤑 **Recompensas:**\n> ✨ +${achievement.reward?.xp || 0} Xp\n> 💸 +R$ ${achievement.reward?.money || 0}\n🫡 **Obtida?**\n${obtained}`
            }])
            .setImage('https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUybWZjYjFteHRobDJ4c2RqZ21jd25oOWJoOGc3aHNvczY0MGgyeTJqbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R0nn6JhamSFd2LlP6B/giphy.gif')
    );
};