// import custom pages
const createHomePage = require('../../components/embeds/homePage.js');

module.exports = {
    customId: 'homePageButton',
    async execute(interaction) {
        const [id, ownerId] = interaction.customId.split(':');

        // user restriction
        if (ownerId && interaction.user.id !== ownerId) {
            return interaction.reply({
                content: '❌ Isso não é pra você!',
                ephemeral: true
            });
        };

        // home embed
        const embed = createHomePage(interaction.user);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: [/* ADD LATER */]
        });
    }
};