// import custom functions
const createButton = require('../../../utils/components/button');

// create rank button
module.exports = function createMoneyRankButton(user) {
    return createButton({
        customId: 'moneyRankButton',
        label: '💰',
        user
    });
};