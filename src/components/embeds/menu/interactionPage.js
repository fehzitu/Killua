// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createInteractionPage(user) {
    return (
        createEmbed(user)
            .addFields([{
                name: '\u200B',
                value: '\u200B'
            }])
    );
};