// import custom functions
const createSelector = require('../../utils/selector');

// create home page selector
module.exports = function createProfileSelector(user) {
    return createSelector({
        customId: 'profilePageSelector',
        user,
        placeholder: '🏆 Todas as conquistas',
        optionsList: [{
            label: '1',
            description: '1',
            value: '1'
        }]
    });
};