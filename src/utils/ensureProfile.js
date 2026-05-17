// import custom components
const createDefaultUser = require('../structures/defaultUser');

function ensureProfile(ctx, user) {
    // get the users
    const users = ctx.client.usersData;

    // check if the user has a profile
    if (!users[user.id]) {
        // create new profile
        users[user.id] = createDefaultUser();

        // log
        console.log(`🏆 Novo perfil criado para ${user.username}`);
    };

    return users[user.id];
};

module.exports = ensureProfile;