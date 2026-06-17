// import custom functions
const createButton = require('../../utils/components/button');

// create home page back button
module.exports = function createMenuButton(user) {
    return createButton({
        customId: 'menuPageButton',
        label: '🏠 Menu principal',
        user
    });
};