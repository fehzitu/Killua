// import custom functions
const createButton = require('../../utils/button.js');

// create home page button
module.exports = function createHomeButton(user) {
    return createButton({
        customId: 'homePageButton',
        label: '🏠 Menu principal',
        user
    }).setDisabled(true);
};