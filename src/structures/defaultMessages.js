// import custom functions
const createEmbed = require('../utils/components/embed');

// level msg
function createLevelUpMessage(user, level) {
    return (
        createEmbed(user)
            .addFields([{
                name: '🎉 **Parabéns!**',
                value: `**${user} subiu para o nível ${level}**!`
            }])
    );
};

// achievements msg
function createAchievementsMessage(user, achievement) {
    return (
        createEmbed(user)
            .addFields([{
                name: `🏆 **Conquista desbloqueada!**\n>>> 📝 ${achievement.name}\n${achievement.goal}`,
                value: `>>> ✨ +${achievement.reward?.xp || 0} Xp\n💸 +R$ ${achievement.reward?.money || 0}`
            }])
            .setThumbnail('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmNsbnp5dHNmcXYzdzZ6OGtwZDllbDF0d2hzbHVveDVnbDllem9iaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KQhEzQYoNveKEI0giY/giphy.gif')
    );
};

// create an messages list
module.exports = {
    createLevelUpMessage,
    createAchievementsMessage
};