// import custom functions
const createButton = require('../../../utils/components/button');

// create kick button
module.exports = function createKickButton(user) {
    return createButton({
        customId: 'kickButton',
        label: '🦵',
        user
    });
};