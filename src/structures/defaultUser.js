// Create an default profile user
function createDefaultUser() {
    return ({
        profileCreatedAt: new Date().toISOString(),
        rpg: {
            level: 1,
            xp: 0,
            money: 100
        },
        honor: {
            achievements: [],
            medals: [],
            prestige: []
        },
        karma: {
            personality: '(Sem karma)',
            positive: 0,
            negative: 0
        },
        stats: {
            messages: 0,
            commands: 0
        },
        cooldowns: {
            xp: 0
        }
    });
};

module.exports = createDefaultUser;