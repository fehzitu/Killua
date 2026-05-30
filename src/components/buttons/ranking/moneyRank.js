// import custom functions
const createButton = require('../../../utils/button');

// create money rank button
module.exports = function createMoneyRankButton(user) {
    return createButton({
        customId: 'moneyRankButton',
        label: '💰',
        user
    });
};