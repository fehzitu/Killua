// import custom functions
const createButton = require('../../../utils/components/button');

// create provoke button
module.exports = function createProvokeButton(user) {
    return createButton({
        customId: 'provokeButton',
        label: '🖕',
        user
    });
};