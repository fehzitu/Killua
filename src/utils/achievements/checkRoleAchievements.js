// import achievement functions
const unlockAchievement = require('./unlockAchievement');

// check command achievements
function checkRoleAchievements(profile) {
    // unlocked achievements
    const unlocked = [];

    // beta user achievement
    if (profile.rpg.role == 'Beta') {
        const achievement = unlockAchievement(
            profile,
            'beta_user'
        );

        if (achievement) unlocked.push(achievement);
    };

    // return unlocked achievements
    return unlocked;
};

module.exports = checkRoleAchievements;