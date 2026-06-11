// import achievement functions
const unlockAchievement = require('./unlockAchievement');

// check message achievements
function checkMessageAchievements(profile) {
    // unlocked achievements
    const unlocked = [];

    // 5 messages achievement
    if (profile.stats.messages >= 5) {
        const achievement = unlockAchievement(
            profile,
            '5_messages'
        );

        if (achievement) unlocked.push(achievement);
    };

    // 25 messages achievement
    if (profile.stats.messages >= 25) {
        const achievement = unlockAchievement(
            profile,
            '25_messages'
        );

        if (achievement) unlocked.push(achievement);
    };

    // 50 messages achievement
    if (profile.stats.messages >= 50) {
        const achievement = unlockAchievement(
            profile,
            '50_messages'
        );

        if (achievement) unlocked.push(achievement);
    };

    // 75 messages achievement
    if (profile.stats.messages >= 75) {
        const achievement = unlockAchievement(
            profile,
            '75_messages'
        );

        if (achievement) unlocked.push(achievement);
    };

    // 100 messages achievement
    if (profile.stats.messages >= 100) {
        const achievement = unlockAchievement(
            profile,
            '100_messages'
        );

        if (achievement) unlocked.push(achievement);
    };

    // return unlocked achievements
    return unlocked;
};

module.exports = checkMessageAchievements;