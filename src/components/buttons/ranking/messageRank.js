// import custom functions
const createButton = require('../../../utils/components/button');

// create rank button
module.exports = function createMessageRankButton(user) {
    return createButton({
        customId: 'messageRankButton',
        label: '💬',
        user
    });
};