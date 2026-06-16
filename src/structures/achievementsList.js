// create an achievements list
module.exports = [
    {
        id: '100_messages',
        name: '100 chats',
        icon: '💬',
        goal: 'Enviar 100 mensagens pela primeira vez',
        rarity: '⭐️',
        hidden: false,

        reward: {
            xp: 50,
            money: 100
        }
    },
    {
        id: '150_messages',
        name: '150 chats',
        icon: '💬',
        goal: 'Enviar 150 mensagens pela primeira vez',
        rarity: '⭐️⭐️',
        hidden: false,

        reward: {
            xp: 50,
            money: 100
        }
    },
    {
        id: '25_commands',
        name: '25 comandos',
        icon: '⚡',
        goal: 'Usar 25 comandos pela primeira vez',
        rarity: '⭐️',
        hidden: false,

        reward: {
            xp: 50,
            money: 100
        }
    },
    {
        id: '50_commands',
        name: '50 comandos',
        icon: '⚡',
        goal: 'Usar 50 comandos pela primeira vez',
        rarity: '⭐️⭐️',
        hidden: false,

        reward: {
            xp: 50,
            money: 100
        }
    },
    {
        id: 'level15',
        name: 'Nível 15',
        icon: '⚜️',
        goal: 'Chegar ao nivel 15',
        rarity: '⭐️',
        hidden: false,

        reward: {
            xp: 250,
            money: 500
        }
    },
    {
        id: 'level30',
        name: 'Nível 30',
        icon: '⚜️',
        goal: 'Chegar ao nivel 30',
        rarity: '⭐️⭐️',
        hidden: false,

        reward: {
            xp: 500,
            money: 1000
        }
    },
    {
        id: 'positive_karma',
        name: 'Boa alma',
        icon: '✨',
        goal: 'Ter 50 karmas positivos',
        rarity: '⭐️⭐️⭐️⭐️',
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
        rarity: '⭐️⭐️⭐️⭐️',
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
        rarity: '⭐️⭐️⭐️⭐️⭐',
        hidden: false,

        reward: {
            xp: 5000,
            money: 10000
        }
    }
];