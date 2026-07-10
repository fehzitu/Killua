// import custom functions
const createSelector = require('../../utils/components/selector');

// create interaction page selector
module.exports = function createInteractionSelector(user, members) {
    return createSelector({
        customId: 'interactionPageSelector',
        user,
        placeholder: '👤 Escolha alguém',
        optionsList: members
    });
};