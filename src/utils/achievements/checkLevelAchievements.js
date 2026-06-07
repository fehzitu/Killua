// import achievement functions
const unlockAchievement = require('./unlockAchievement');

// check level achievements
function checkLevelAchievements(profile) {
    // unlocked achievements
    const unlocked = [];

    // level achievements
    if (profile.rpg.level >= 5) {
        const achievement = unlockAchievement(
            profile,
            'level5'
        );

        if (achievement) unlocked.push(achievement);
    };

    if (profile.rpg.level >= 7) {
        const achievement = unlockAchievement(
            profile,
            'level7'
        );

        if (achievement) unlocked.push(achievement);
    };

    if (profile.rpg.level >= 10) {
        const achievement = unlockAchievement(
            profile,
            'level10'
        );

        if (achievement) unlocked.push(achievement);
    };

    // return unlocked achievements
    return unlocked;
};

module.exports = checkLevelAchievements;