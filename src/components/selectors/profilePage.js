// import custom functions
const createSelector = require('../../utils/selector');

// create home page selector
module.exports = function createProfileSelector(user) {
    return createSelector({
        customId: 'profilePageSelector',
        user,
        placeholder: 'ESSE COMPONENTE É UM TESTE APENAS',
        optionsList: [{
            label: 'CAMPO 1',
            description: 'CAMPO DE TESTE 1',
            value: 'teste_1'
        }]
    }).setDisabled(true);
};