// import custom functions
const createButton = require('../../../utils/components/button');

// create hug button
module.exports = function createHugButton(user) {
    return createButton({
        customId: 'hugButton',
        label: '🤗',
        user
    });
};