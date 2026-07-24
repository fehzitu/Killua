// import custom functions
const createButton = require('../../../utils/components/button');

// create an button
module.exports = function createRouletteValueButton(user, value) {
    return createButton({
        customId: `rouletteValueButton:${value}`,
        label: `R$${value}`,
        user
    });
};