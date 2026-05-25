// create an achievements list
module.exports = [
    {
        id: 'first_message',
        name: 'Timido',
        icon: '💬',
        file: 'src/imgs/achievements/timido.png',
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
        file: 'src/imgs/achievements/novato.png',
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
        file: 'src/imgs/achievements/5.png',
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
        file: 'src/imgs/achievements/boaAlma.png',
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
        file: 'src/imgs/achievements/caotico.png',
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
        file: 'src/imgs/achievements/betinha.png',
        rarity: 'legendary',
        hidden: false,

        reward: {
            xp: 5000,
            money: 10000
        }
    }
];