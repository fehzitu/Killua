// import custom functions
const createButton = require('../../../utils/button');

// create rank button
module.exports = function createMessageRankButton(user) {
    return createButton({
        customId: 'messageRankButton',
        label: '💬',
        user
    });
};