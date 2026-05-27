// create an achievements list
module.exports = [
    {
        id: 'first_message',
        name: 'Timido',
        icon: '💬',
        objective: 'Enviar uma mensagem pela primeira vez',
        rarity: 'common',
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
        objective: 'Usar um comando pela primeira vez',
        rarity: 'common',
        hidden: false,

        reward: {
            xp: 50,
            money: 100
        }
    },
    {
        id: 'rookie',
        name: '5',
        icon: '5️⃣',
        objective: 'Chegar ao nivel 5',
        rarity: 'common',
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
        objective: 'Ter 50 karmas positivos',
        rarity: 'epic',
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
        objective: 'Ter 50 karmas negativos',
        rarity: 'epic',
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
        objective: 'Participar da beta',
        rarity: 'legendary',
        hidden: false,

        reward: {
            xp: 5000,
            money: 10000
        }
    }
];