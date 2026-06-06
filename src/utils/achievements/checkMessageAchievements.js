// import achievement functions
const unlockAchievement = require('./unlockAchievement');

// check message achievements
function checkMessageAchievements(profile) {
    // unlocked achievements
    const unlocked = [];

    // first message achievement
    if (profile.stats.messages >= 5) {
        const achievement = unlockAchievement(
            profile,
            'initial_messages'
        );

        if (achievement) unlocked.push(achievement);
    };

    // return unlocked achievements
    return unlocked;
};

module.exports = checkMessageAchievements;