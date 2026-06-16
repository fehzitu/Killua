// discord imports
const { MessageActionRow } = require('discord.js');

// import custom pages
const createProfilePage = require('../../components/embeds/menu/profilePage');
const createAchievementPage = require('../../components/embeds/menu/achievementPage');
const createRankingPage = require('../../components/embeds/menu/rankingPage');
const createInfoPage = require('../../components/embeds/menu/infoPage');
const createHelpPage = require('../../components/embeds/menu/helpPage');
const createSupportPage = require('../../components/embeds/menu/supportPage');
const createPingPage = require('../../components/embeds/menu/pingPage');

// import custom interactions
const createHomeButton = require('../../components/buttons/homePage');
const createHomeSelector = require('../../components/selectors/homePage');
const createProfileSelector = require('../../components/selectors/profilePage');

// import custom ranking buttons
const createMoneyRankButton = require('../../components/buttons/ranking/moneyRank');
const createLevelRankButton = require('../../components/buttons/ranking/levelRank');
const createMessageRankButton = require('../../components/buttons/ranking/messageRank');

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

        // buttons
        const homeButton = createHomeButton(user);

        // ranking buttons
        const moneyRankButton = createMoneyRankButton(user, client);
        const levelRankButton = createLevelRankButton(user, client);
        const messageRankButton = createMessageRankButton(user, client);

        // selectors
        const homePageSelector = createHomeSelector(user);
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
            buttonRow.addComponents(homeButton);

            // create page
            embed = createProfilePage(client, user);
            componentsList = [selectorRow, buttonRow];
        };

        // achievement page
        if (value === 'achievement') {
            // add componens to rows
            buttonRow.addComponents(homeButton);

            // create page
            embed = createAchievementPage(user);
            componentsList = [buttonRow];
        };

        // ranking page
        if (value === 'ranking') {
            // add componens to rows
            buttonRow.addComponents(moneyRankButton, levelRankButton, messageRankButton);
            buttonRow2.addComponents(homeButton);

            // create page
            embed = createRankingPage(user);
            componentsList = [buttonRow, buttonRow2];
        };

        // info page
        if (value === 'info') {
            // add component to rows
            buttonRow.addComponents(homeButton);

            // create page
            embed = createInfoPage(client, user);
            componentsList = [buttonRow];
        };

        // info page
        if (value === 'help') {
            // add component to rows
            buttonRow.addComponents(homeButton);

            // create page
            embed = createHelpPage(user);
            componentsList = [buttonRow];
        };

        // support page
        if (value === 'support') {
            // add component to rows
            buttonRow.addComponents(homeButton);

            // create page
            embed = createSupportPage(user);
            componentsList = [buttonRow];
        };

        // support page
        if (value === 'ping') {
            // add component to rows
            buttonRow.addComponents(homeButton);

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