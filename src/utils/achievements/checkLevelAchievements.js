// import achievement functions
const unlockAchievement = require('./unlockAchievement');

// check level achievements
function checkLevelAchievements(profile) {
    // unlocked achievements
    const unlocked = [];

    // level achievements
    if (profile.rpg.level >= 15) {
        const achievement = unlockAchievement(
            profile,
            'level15'
        );

        if (achievement) unlocked.push(achievement);
    };

    if (profile.rpg.level >= 30) {
        const achievement = unlockAchievement(
            profile,
            'level30'
        );

        if (achievement) unlocked.push(achievement);
    };

    // return unlocked achievements
    return unlocked;
};

module.exports = checkLevelAchievements;