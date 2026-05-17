// import custom components
const createDefaultUser = require('../structures/defaultUser.js');

function ensureProfile(ctx, user) {
    // get the users
    const users = ctx.client.usersData;

    // check if the user has a profile
    if (!users[userId]) {
        // create new profile
        users[userId] = createDefaultUser();

        // log
        console.log(`🏆 Novo perfil criado para ${userTag}`);
    };

    return users[user.id];
};

module.exports = ensureProfile;