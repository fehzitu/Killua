// import custom functions
const createButton = require('../../../utils/components/button');

// create an button
module.exports = function createRouletteButton(user) {
    return createButton({
        customId: 'rouletteButton',
        label: '💸',
        user
    });
};