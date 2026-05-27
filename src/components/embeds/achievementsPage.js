// import custom functions
const createEmbed = require('../../utils/embed');

// import achievements list
const achievementsList = require('../../structures/achievementsList');

// return an embed with the page
module.exports = function createAchievementsPage(user, achievementIndex) {
    return (
        createEmbed(user)
            .addFields([{
                name: '...',
                value: '...'
            }])
    );
};