// import custom functions
const createButton = require('../../../utils/button');

// create rank button
module.exports = function createAchievementRankButton(user) {
    return createButton({
        customId: 'achievementRankButton',
        label: '🏅',
        user
    });
};