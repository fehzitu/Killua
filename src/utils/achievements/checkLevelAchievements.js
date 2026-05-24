// import achievement functions
const unlockAchievement = require('./unlockAchievement');

// check level achievements
function checkLevelAchievements(profile) {
    // unlocked achievements
    const unlocked = [];

    // rookie achievement
    if (profile.rpg.level >= 5) {
        const achievement = unlockAchievement(
            profile,
            'rookie'
        );

        if (achievement) unlocked.push(achievement);
    };

    // return unlocked achievements
    return unlocked;
};

module.exports = checkLevelAchievements;