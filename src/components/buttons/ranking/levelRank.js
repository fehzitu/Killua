// import custom functions
const createButton = require('../../../utils/button');

// create rank button
module.exports = function createLevelRankButton(user) {
    return createButton({
        customId: 'levelRankButton',
        label: '📈',
        user
    });
};