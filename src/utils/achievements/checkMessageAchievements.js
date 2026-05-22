// import achievement functions
const unlockAchievement = require('./unlockAchievement');

// check message achievements
function checkMessageAchievements(profile) {
    // unlocked achievements
    const unlocked = [];

    // first message achievement
    if (profile.stats.messages >= 1) {
        const achievement = unlockAchievement(
            profile,
            'first_message'
        );

        if (achievement) unlocked.push(achievement);
    };

    // social person achievement
    if (profile.stats.messages >= 1000) {
        const achievement = unlockAchievement(
            profile,
            'social_person'
        );

        if (achievement) unlocked.push(achievement);
    };

    // return unlocked achievements
    return unlocked;
};

module.exports = checkMessageAchievements;