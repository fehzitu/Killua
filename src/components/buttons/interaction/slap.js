// import custom functions
const createButton = require('../../../utils/components/button');

// create slap button
module.exports = function createSlapButton(user) {
    return createButton({
        customId: 'slapButton',
        label: '✋️',
        user
    });
};