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

    // adventurer achievement
    if (profile.rpg.level >= 15) {
        const achievement = unlockAchievement(
            profile,
            'adventurer'
        );

        if (achievement) unlocked.push(achievement);
    };

    // veteran achievement
    if (profile.rpg.level >= 30) {
        const achievement = unlockAchievement(
            profile,
            'veteran'
        );

        if (achievement) unlocked.push(achievement);
    };

    // elite achievement
    if (profile.rpg.level >= 50) {
        const achievement = unlockAchievement(
            profile,
            'elite'
        );

        if (achievement) unlocked.push(achievement);
    };

    // legend achievement
    if (profile.rpg.level >= 100) {
        const achievement = unlockAchievement(
            profile,
            'legend'
        );

        if (achievement) unlocked.push(achievement);
    };

    // return unlocked achievements
    return unlocked;
};

module.exports = checkLevelAchievements;