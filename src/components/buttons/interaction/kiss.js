// import custom functions
const createButton = require('../../../utils/components/button');

// create kiss button
module.exports = function createKissButton(user, target) {
    return createButton({
        customId: `kissButton:${target}`,
        label: '😘',
        user
    });
};