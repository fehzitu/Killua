// import custom functions
const createButton = require('../../../utils/components/button');

// create punch button
module.exports = function createPunchButton(user) {
    return createButton({
        customId: 'punchButton',
        label: '👊',
        user
    });
};