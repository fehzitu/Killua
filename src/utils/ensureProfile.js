// import custom functions
const createDefaultUser = require('../structures/defaultUser');
const log = require('./logger');

function ensureProfile(client, userId, userTag) {
    // get the users
    const users = client.usersData;

    // check if the user has a profile
    if (!users[userId]) {
        // create new profile
        users[userId] = createDefaultUser();

        // log
        log('RESET', `Novo perfil criado para ${userTag}`);
    };

    return users[userId];
};

module.exports = ensureProfile;