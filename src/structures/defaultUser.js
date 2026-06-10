// create an default profile user
function createDefaultUser() {
    return ({
        profileCreatedAt: new Date().toISOString(),
        rpg: {
            level: 1,
            xp: 0,
            totalXp: 0,
            money: 0,
            role: 'Usuário'
        },
        honor: {
            achievements: []
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