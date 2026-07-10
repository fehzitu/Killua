// import custom functions
const createSelector = require('../../utils/components/selector');

// create interaction page selector
module.exports = function createInteractionSelector(user, members) {
    return createSelector({
        customId: '',
        user,
        placeholder: 'Placeholder',
        optionsList: members
    });
};