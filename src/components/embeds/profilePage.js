// import custom functions
const createEmbed = require('../../utils/embed');
const ensureProfile = require('../../utils/ensureProfile');

// return an embed with the page
module.exports = function createProfilePage(user, client) {
    // get the user profile
    const profile = ensureProfile(client, user.id, user.tag);

    return (
        createEmbed(user)
            .addFields([{
                name: '---',
                value: '---'
            }])
            .setImage('https://i.pinimg.com/originals/fb/7d/25/fb7d25365c6f2deca04b86f35c8fee63.gif')
            .setTimestamp()
    );
};