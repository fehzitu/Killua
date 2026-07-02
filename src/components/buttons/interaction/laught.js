// import custom functions
const createButton = require('../../../utils/components/button');

// create laught button
module.exports = function createLaughtButton(user) {
    return createButton({
        customId: 'laughtButton',
        label: '🤭',
        user
    });
};