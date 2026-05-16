// discord imports
const { MessageActionRow } = require('discord.js');

// import custom pages
const createInfoPage = require('../../components/embeds/infoPage.js');
const createSupportPage = require('../../components/embeds/supportPage.js');

// import custom buttons
const createHomeSelect = require('../../components/selects/homePage.js');
const createHomeButton = require('../../components/buttons/homePage.js');

module.exports = {
    customId: 'homePageSelect',
    async execute(interaction) {
        const [id, ownerId] = interaction.customId.split(':');

        // get client and user
        const client = interaction.client;
        const user = interaction.user;

        // user restriction
        if (ownerId && user.id !== ownerId) {
            return interaction.reply({
                content: '❌ Isso não é pra você!',
                ephemeral: true
            });
        };

        // select
        const select = createHomeSelect(user);

        // button
        const button = createHomeButton(user);

        // rows
        const selectRow = new MessageActionRow().addComponents(select);
        const buttonRow = new MessageActionRow().addComponents(button);

        // components list
        let componentsList = [selectRow]

        // selected value
        const value = interaction.values?.[0];

        // info page
        if (value === 'info') {
            // create embed page
            embed = createInfoPage(user, client);
            componentsList = [buttonRow];
        };

        // support page
        if (value === 'support') {
            // create embed page
            embed = createSupportPage(user);
            componentsList = [buttonRow];
        };

        return interaction.update({
            embeds: [embed],
            components: componentsList
        });
    }
};