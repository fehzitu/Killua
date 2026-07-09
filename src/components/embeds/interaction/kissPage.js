// import custom functions
const createEmbed = require('../../../utils/components/embed');

// return an embed with the page
module.exports = function createKissPage(user) {
    return (
        createEmbed(user)
            .addFields([{
                name: '---',
                value: '---'
            }])
            //.setImage('')
    );
};