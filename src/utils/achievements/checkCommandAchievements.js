// import achievement functions
const unlockAchievement = require('./unlockAchievement');

// check command achievements
function checkCommandAchievements(profile) {
    // unlocked achievements
    const unlocked = [];

    // 50 commands achievement
    if (profile.stats.commands >= 50) {
        const achievement = unlockAchievement(
            profile,
            '50_commands'
        );

        if (achievement) unlocked.push(achievement);
    };

    // return unlocked achievements
    return unlocked;
};

module.exports = checkCommandAchievements;