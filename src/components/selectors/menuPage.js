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
            description: 'Clique para acessar',
            value: 'profile'
        },
        {
            label: '😝 Interações',
            description: 'Clique para acessar',
            value: 'interaction'
        },
        {
            label: '📄 Comandos',
            description: 'Clique para acessar',
            value: 'command'
        },
        {
            label: '🏆 Ranking',
            description: 'Clique para acessar',
            value: 'ranking'
        },
        {
            label: '⚙️ Informações',
            description: 'Clique para acessar',
            value: 'info'
        },
        {
            label: '📋 Ajuda',
            description: 'Clique para acessar',
            value: 'help'
        },
        {
            label: '❓ Suporte',
            description: 'Clique para acessar',
            value: 'support'
        },
        {
            label: '📡 Ping',
            description: 'Clique para acessar',
            value: 'ping'
        }]
    });
};