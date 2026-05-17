// import custom functions
const createDefaultUser = require('../structures/defaultUser');
const log = require('./logger');

function ensureProfile(client, user) {
    // get the users
    const users = client.usersData;

    // check if the user has a profile
    if (!users[user.id]) {
        // create new profile
        users[user.id] = createDefaultUser();

        // log
        log('RESET', `Novo perfil criado para ${user.tag}`);
    };

    return users[user.id];
};

module.exports = ensureProfile;