// import custom functions
const createButton = require('../../../utils/components/button');

// create kill button
module.exports = function createKillButton(user) {
    return createButton({
        customId: 'killButton',
        label: '☠️',
        user
    });
};