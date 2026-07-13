// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createKissPage(user, target) {
    return (
        createEmbed(user)
            .addFields([{
                name: `**<@${user.id}>**`,
                value: `**<@${target.id}>**`
            }])
            //.setImage('')
    );
};