// import custom functions
const createButton = require('../../../utils/components/button');

// create rank button
module.exports = function createKissButton(user) {
    return createButton({
        customId: 'kissButton',
        label: '💋',
        user
    });
};