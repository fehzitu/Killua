// import achievement functions
const unlockAchievement = require('./unlockAchievement');

// check message achievements
function checkMessageAchievements(profile) {
    // unlocked achievements
    const unlocked = [];

    // 150 messages achievement
    if (profile.stats.messages >= 150) {
        const achievement = unlockAchievement(
            profile,
            '150_messages'
        );

        if (achievement) unlocked.push(achievement);
    };

    // return unlocked achievements
    return unlocked;
};

module.exports = checkMessageAchievements;