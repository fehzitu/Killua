// import custom functions
const createSelect = require('../../utils/select.js');

// create home page select
module.exports = function createHomeSelect(user) {
    return createSelect({
        customId: 'homePageSelect',
        user,
        placeholder: '🧾 Escolha uma página',
        optionsList: [{
            label: '⚙️ Informações',
            description: 'Ver info sobre nosso bot',
            value: 'info'
        },
        {
            label: '❓ Suporte',
            description: 'Ver info sobre nosso suporte',
            value: 'support'
        }]
    });
};