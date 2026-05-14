// import custom functions
const createSelect = require('../../utils/select.js');

// create home page select
module.exports = function createHomeSelect(user) {
    return createSelect({
        customId: 'homePageSelect',
        user,
        placeholder: 'Escolha uma página',
        optionsList: [
        {
            label: 'Configurações',
            description: 'Ver configurações',
            value: 'test'
        }
    ]
});