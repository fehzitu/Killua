// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function CreateAchievementsPage(client, user) {
    return (
        createEmbed(user)
    );
};