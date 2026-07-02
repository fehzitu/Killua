// import custom functions
const createButton = require('../../../utils/components/button');

// create party button
module.exports = function createPartyButton(user) {
    return createButton({
        customId: 'partyButton',
        label: '🥳',
        user
    });
};