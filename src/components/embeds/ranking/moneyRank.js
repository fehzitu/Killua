// import custom functions
const createEmbed = require('../../../utils/embed');

// return an embed with the page
module.exports = function createMoneyRankPage(user, usersList) {
    // get all users
    const users = usersList;

    return (
        createEmbed(user)
            .addFields([{
                name: '---',
                value: '---'
            }])
            //.setImage('')
    );
};

// FINISH LATER