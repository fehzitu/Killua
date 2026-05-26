// import custom functions
const createEmbed = require('../../utils/embed');

// return an embed with the page
module.exports = function createAchievementsPage(user, achievement) {
    return (
        createEmbed(user)
            .addFields([{
                name: '...',
                value: '...'
            }])
    );
};