// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createAchievementPage(user) {
    return (
        createEmbed(user)
    );
};