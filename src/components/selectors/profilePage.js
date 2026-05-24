// import custom functions
const createSelector = require('../../utils/selector');

// import achievements list
const achievementsList = require('../../structures/achievementsList');

// create home page selector
module.exports = function createProfileSelector(user) {
    return createSelector({
        customId: 'profilePageSelector',
        user,
        placeholder: '🏆 Todas as conquistas',
        optionsList: achievementsList.map((achievement, index) => ({
            label: `${achievement.icon} ${achievement.name}`,
            description: 'Ver mais detalhes',
            value: String(index)
        }))
    });
};