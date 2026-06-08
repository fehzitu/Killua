// import custom functions
const createButton = require('../../../utils/components/button');

// create rank button
module.exports = function createLevelRankButton(user) {
    return createButton({
        customId: 'levelRankButton',
        label: '📈',
        user
    });
};