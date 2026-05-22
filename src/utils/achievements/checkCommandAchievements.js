// import achievement functions
const unlockAchievement = require('./unlockAchievement');

// check command achievements
function checkCommandAchievements(profile) {
    // unlocked achievements
    const unlocked = [];

    // first command achievement
    if (profile.stats.commands >= 1) {
        const achievement = unlockAchievement(
            profile,
            'first_command'
        );

        if (achievement) unlocked.push(achievement);
    };

    // command addict achievement
    if (profile.stats.commands >= 100) {
        const achievement = unlockAchievement(
            profile,
            'command_addict'
        );

        if (achievement) unlocked.push(achievement);
    };

    // return unlocked achievements
    return unlocked;
};

module.exports = checkCommandAchievements;