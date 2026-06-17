// import custom functions
const createSelector = require('../../utils/components/selector');

// create home page selector
module.exports = function createMenuSelector(user) {
    return createSelector({
        customId: 'menuPageSelector',
        user,
        placeholder: '🧾 Escolha uma página',
        optionsList: [{
            label: '👤 Perfil',
            description: 'Acessa seu perfil',
            value: 'profile'
        },
        {
            label: '🏆 Ranking',
            description: 'Acessa o ranking',
            value: 'ranking'
        },
        {
            label: '⚙️ Informações',
            description: 'Ver info sobre nosso bot',
            value: 'info'
        },
        {
            label: '📋 Ajuda',
            description: 'Uma ajudinha sobre o bot',
            value: 'help'
        },
        {
            label: '❓ Suporte',
            description: 'Ver info sobre nosso suporte',
            value: 'support'
        },
        {
            label: '📡 Ping',
            description: 'Ver o ping do bot',
            value: 'ping'
        }]
    });
};