// import custom functions
const createButton = require('../../../utils/components/button');

// create greet button
module.exports = function createGreetButton(user) {
    return createButton({
        customId: 'greetButton',
        label: '🫡',
        user
    });
};