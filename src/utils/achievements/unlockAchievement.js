// import achievements list
const achievementsList = require('../../structures/achievementsList');

// unlock an achievement
function unlockAchievement(profile, achievementId) {
    // find achievement
    const achievement = achievementsList.find(achievement => achievement.id === achievementId);

    // achievement not found
    if (!achievement) return null;

    // already unlocked
    if (profile.honor.achievements.includes(
            achievementId)) return null;

    // unlock achievement
    profile.honor.achievements.push(achievementId);

    // give rewards
    if (achievement.reward?.xp) {
        profile.rpg.totalXp += achievement.reward.xp;
        profile.rpg.xp += achievement.reward.xp;
    };

    if (achievement.reward?.money) profile.rpg.money += achievement.reward.money;

    // return unlocked achievement
    return achievement;
};

module.exports = unlockAchievement;