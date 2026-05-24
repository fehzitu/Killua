// import custom functions
const createSelector = require('../../utils/selector');

// import achievements list
const achievementsList = require('../../structures/achievementsList');

// selector values list
const options = [];

// an map to use all achievements values
achievementsList.map(item => {
    options.push({
        label: `${item.icon} ${item.name}`,
        description: 'Ver mais detalhes',
        value: `${options.indexOf(item) + 1}`
    });
});

// create home page selector
module.exports = function createProfileSelector(user) {
    return createSelector({
        customId: 'profilePageSelector',
        user,
        placeholder: '🏆 Todas as conquistas',
        optionsList: options
    });
};