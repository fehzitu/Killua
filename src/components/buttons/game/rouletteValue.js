// import custom functions
const createButton = require('../../../utils/components/button');

// create an button
module.exports = function createRouletteValueButton(user, value, color) {
    return createButton({
        customId: `rouletteValueButton:${value}:${color}`,
        label: `R$${value}`,
        user
    });
};