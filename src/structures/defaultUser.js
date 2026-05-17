// Default profile user
const defaultUser = {
    profileCreatedAt: new Date().toISOString(),
    rpg: {
        level: 1,
        xp: 0,
        karma: '🌀 (Sem karma)',
        money: 100,
        medals: []
    },
    stats: {
        messages: 0,
        commands: 0
    },
    karma: {
        positive: 0,
        negative: 0
    },
    cooldowns: {
        xp: 0
    }
};

module.exports = {
    defaultUser
};