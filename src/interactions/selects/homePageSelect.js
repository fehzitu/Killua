// import custom pages
const createHomePage = require('../../components/embeds/homePage.js');

module.exports = {
    customId: 'homePageSelect',
    async execute(interaction) {
        const [id, ownerId] = interaction.customId.split(':');

        // user restriction
        if (ownerId && interaction.user.id !== ownerId) {
            return interaction.reply({
                content: '❌ Isso não é pra você!',
                ephemeral: true
            });
        };

        // selected value
        const value = interaction.values?.[0];

        // home page
        if (value === 'home') {
            const embed = createHomePage(interaction.user);
            const select = createHomeSelect(interaction.user);
            const button = createHomeButton(interaction.user);

            return interaction.update({
                embeds: [embed],
                components: [/* ADD LATER */]
            });
        };
    }
};