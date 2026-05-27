// create an achievements list
module.exports = [
    {
        id: 'first_message',
        name: 'Timido',
        icon: '💬',
        goal: 'Enviar uma mensagem pela primeira vez',
        rarity: '⭐️',
        hidden: false,

        reward: {
            xp: 50,
            money: 100
        }
    },
    {
        id: 'first_command',
        name: 'Novato',
        icon: '⚡',
        goal: 'Usar um comando pela primeira vez',
        rarity: '⭐️',
        hidden: false,

        reward: {
            xp: 50,
            money: 100
        }
    },
    {
        id: 'rookie',
        name: 'Nível 5',
        icon: '5️⃣',
        goal: 'Chegar ao nivel 5',
        rarity: '⭐️',
        hidden: false,

        reward: {
            xp: 250,
            money: 500
        }
    },
    {
        id: 'rookie',
        name: 'Nível 10',
        icon: '🔟',
        goal: 'Chegar ao nivel 10',
        rarity: '⭐️⭐️',
        hidden: false,

        reward: {
            xp: 250,
            money: 500
        }
    },
    {
        id: 'positive_karma',
        name: 'Boa alma',
        icon: '✨',
        goal: 'Ter 50 karmas positivos',
        rarity: '⭐️⭐️⭐️',
        hidden: true,

        reward: {
            xp: 1000,
            money: 2000
        }
    },
    {
        id: 'negative_karma',
        name: 'Caótico',
        icon: '😈',
        goal: 'Ter 50 karmas negativos',
        rarity: '⭐️⭐️⭐️',
        hidden: true,

        reward: {
            xp: 1000,
            money: 2000
        }
    },
    {
        id: 'beta_user',
        name: 'Betinha',
        icon: '👑',
        goal: 'Participar da beta',
        rarity: '⭐️⭐️⭐️⭐️',
        hidden: false,

        reward: {
            xp: 5000,
            money: 10000
        }
    }
];