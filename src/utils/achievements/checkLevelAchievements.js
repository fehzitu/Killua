// import achievement functions
const unlockAchievement = require('./unlockAchievement');

// check level achievements
function checkLevelAchievements(profile) {
    // unlocked achievements
    const unlocked = [];

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