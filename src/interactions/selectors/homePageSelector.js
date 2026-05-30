// discord imports
const { MessageActionRow } = require('discord.js');

// import custom pages
const createProfilePage = require('../../components/embeds/profilePage');
const createRankingPage = require('../../components/embeds/rankingPage');
const createInfoPage = require('../../components/embeds/infoPage');
const createHelpPage = require('../../components/embeds/helpPage');
const createSupportPage = require('../../components/embeds/supportPage');
const createPingPage = require('../../components/embeds/pingPage');

// import custom interactions
const createMoneyRankButton = require('../../components/buttons/ranking/moneyRank');
const createHomeButton = require('../../components/buttons/homePage');
const createHomeSelector = require('../../components/selectors/homePage');
const createProfileSelector = require('../../components/selectors/profilePage');

module.exports = {
    customId: 'homePageSelector',
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

        // back to menu button
        const backHomeButton = createHomeButton(user);

        // money rank button
        const moneyRankButton = createMoneyRankButton(user);

        // home page selector
        const homePageSelector = createHomeSelector(user);

        // profile page selector
        const profilePageSelector = createProfileSelector(user);

        // rows
        let selectorRow = new MessageActionRow();
        let buttonRow = new MessageActionRow();
        let buttonRow2 = new MessageActionRow();

        // components list
        let componentsList = [selectorRow];

        // selected value
        const value = interaction.values?.[0];

        // info page
        if (value === 'profile') {
            // add component to rows
            selectorRow.addComponents(profilePageSelector);
            buttonRow.addComponents(backHomeButton);

            // create page
            embed = createProfilePage(client, user);
            componentsList = [selectorRow, buttonRow];
        };
        
        // ranking page
        if (value === 'ranking') {
            // add componens to rows
            buttonRow.addComponents(moneyRankButton);
            buttonRow2.addComponents(backHomeButton);

            // create page
            embed = createRankingPage(user);
            componentsList = [buttonRow, buttonRow2];
        };

        // info page
        if (value === 'info') {
            // add component to rows
            buttonRow.addComponents(backHomeButton);

            // create page
            embed = createInfoPage(client, user);
            componentsList = [buttonRow];
        };

        // info page
        if (value === 'help') {
            // add component to rows
            buttonRow.addComponents(backHomeButton);

            // create page
            embed = createHelpPage(user);
            componentsList = [buttonRow];
        };

        // support page
        if (value === 'support') {
            // add component to rows
            buttonRow.addComponents(backHomeButton);

            // create page
            embed = createSupportPage(user);
            componentsList = [buttonRow];
        };

        // support page
        if (value === 'ping') {
            // add component to rows
            buttonRow.addComponents(backHomeButton);

            // create page
            embed = createPingPage(client, user);
            componentsList = [buttonRow];
        };

        return interaction.update({
            embeds: [embed],
            components: componentsList
        });
    }
};