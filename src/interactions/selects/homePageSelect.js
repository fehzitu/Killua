// discord imports
const { MessageActionRow } = require('discord.js');

// import custom pages
const createProfilePage = require('../../components/embeds/profilePage');
const createInfoPage = require('../../components/embeds/infoPage');
const createHelpPage = require('../../components/embeds/helpPage');
const createSupportPage = require('../../components/embeds/supportPage');

// import custom interactions
const createHomeSelect = require('../../components/selects/homePage');
const createHomeButton = require('../../components/buttons/homePage');

module.exports = {
    customId: 'homePageSelect',
    async execute(interaction) {
        const [id, ownerId] = interaction.customId.split(':');

        // get client and user
        const user = interaction.user;
        const client = interaction.client;

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
        if (value === 'profile') {
            // create embed page
            embed = createProfilePage(client, user);
            componentsList = [buttonRow];
        };

        // info page
        if (value === 'info') {
            // create embed page
            embed = createInfoPage(client, user);
            componentsList = [buttonRow];
        };

        // info page
        if (value === 'help') {
            // create embed page
            embed = createHelpPage(user);
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