// import custom functions
const createButton = require('../../utils/button');

// create home page back button
module.exports = function createHomeButton(user) {
    return createButton({
        customId: 'homePageButton',
        label: '🏠 Menu principal',
        user
    });
};