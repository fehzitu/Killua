// discord imports
const { MessageActionRow } = require('discord.js');

// import custom components
const createHomePage = require('../../components/embeds/homePage.js');
const createHomeSelect = require('../../components/selects/homePage.js');

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

        // select
        const select = createHomeSelect(interaction.user);

        // rows
        let selectRow = new MessageActionRow().addComponents(select);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: [selectRow]
        });
    }
};