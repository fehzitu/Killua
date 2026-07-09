// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createKissPage(user, param) {
    return (
        createEmbed(user)
            .addFields([{
                name: `${user.username}`,
                value: `${param}`
            }])
            //.setImage('')
    );
};