// discord imports
const { MessageActionRow } = require('discord.js');

// import custom pages
const createProfilePage = require('../../components/embeds/menu/profilePage');
const createInteractionPage = require('../../components/embeds/menu/interactionPage');
const createCommandPage = require('../../components/embeds/menu/commandPage');
const createRankingPage = require('../../components/embeds/menu/rankingPage');
const createInfoPage = require('../../components/embeds/menu/infoPage');
const createHelpPage = require('../../components/embeds/menu/helpPage');
const createSupportPage = require('../../components/embeds/menu/supportPage');
const createPingPage = require('../../components/embeds/menu/pingPage');

// import custom interactions
const createMenuButton = require('../../components/buttons/menuPage');
const createMenuSelector = require('../../components/selectors/menuPage');
const createProfileSelector = require('../../components/selectors/profilePage');

// import custom positive interactions buttons
const createKissButton = require('../../components/buttons/interaction/kiss');
const createHugButton = require('../../components/buttons/interaction/hug');
const createGreetButton = require('../../components/buttons/interaction/greet');
const createLaughtButton = require('../../components/buttons/interaction/laught');
const createPartyButton = require('../../components/buttons/interaction/party');

// import custom negative interactions buttons
const createPunchButton = require('../../components/buttons/interaction/punch');
const createKickButton = require('../../components/buttons/interaction/kick');
const createSlapButton = require('../../components/buttons/interaction/slap');
const createKillButton = require('../../components/buttons/interaction/kill');

// import custom ranking buttons
const createMoneyRankButton = require('../../components/buttons/ranking/moneyRank');
const createLevelRankButton = require('../../components/buttons/ranking/levelRank');
const createMessageRankButton = require('../../components/buttons/ranking/messageRank');

module.exports = {
    customId: 'menuPageSelector',
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

        // menu button
        const menuButton = createMenuButton(user);

        // positive interaction buttons
        const kissButton = createKissButton(user).setStyle('SUCCESS').setDisabled(true);
        const hugButton = createHugButton(user).setStyle('SUCCESS').setDisabled(true);
        const greetButton = createGreetButton(user).setStyle('SUCCESS').setDisabled(true);
        const laughtButton = createLaughtButton(user).setStyle('SUCCESS').setDisabled(true);
        const partyButton = createPartyButton(user).setStyle('SUCCESS').setDisabled(true);

        // negative interaction buttons
        const punchButton = createPunchButton(user).setStyle('DANGER').setDisabled(true);
        const kickButton = createKickButton(user).setStyle('DANGER').setDisabled(true);
        const slapButton = createSlapButton(user).setStyle('DANGER').setDisabled(true);
        const killButton = createKillButton(user).setStyle('DANGER').setDisabled(true);

        // ranking buttons
        const moneyRankButton = createMoneyRankButton(user, client);
        const levelRankButton = createLevelRankButton(user, client);
        const messageRankButton = createMessageRankButton(user, client);

        // selectors
        const menuPageSelector = createMenuSelector(user);
        const profilePageSelector = createProfileSelector(user);

        // selected value
        const value = interaction.values?.[0];

        // profile page
        if (value === 'profile') {
            // add component to rows
            const selectorRow = new MessageActionRow().addComponents(profilePageSelector);
            const buttonRow = new MessageActionRow().addComponents(menuButton);

            // create page
            embed = createProfilePage(client, user);
            componentsList = [selectorRow, buttonRow];
        };

        // interaction page
        if (value === 'interaction') {
            // add component to rows
            const buttonRow = new MessageActionRow().addComponents(kissButton, hugButton, greetButton, laughtButton, partyButton);
            const buttonRow2 = new MessageActionRow().addComponents(punchButton, kickButton, slapButton, killButton);
            const buttonRow3 = new MessageActionRow().addComponents(menuButton);

            // create page
            embed = createInteractionPage(user);
            componentsList = [buttonRow, buttonRow2, buttonRow3];
        };

        // command page
        if (value === 'command') {
            // add componens to rows
            const buttonRow = new MessageActionRow().addComponents(menuButton);

            // create page
            embed = createCommandPage(user);
            componentsList = [buttonRow];
        };

        // ranking page
        if (value === 'ranking') {
            // add componens to rows
            const buttonRow = new MessageActionRow().addComponents(moneyRankButton, levelRankButton, messageRankButton);
            const buttonRow2 = new MessageActionRow().addComponents(menuButton);

            // create page
            embed = createRankingPage(user);
            componentsList = [buttonRow, buttonRow2];
        };

        // info page
        if (value === 'info') {
            // add component to rows
            const buttonRow = new MessageActionRow().addComponents(menuButton);

            // create page
            embed = createInfoPage(client, user);
            componentsList = [buttonRow];
        };

        // help page
        if (value === 'help') {
            // add component to rows
            const buttonRow = new MessageActionRow().addComponents(menuButton);

            // create page
            embed = createHelpPage(user);
            componentsList = [buttonRow];
        };

        // support page
        if (value === 'support') {
            // add component to rows
            const buttonRow = new MessageActionRow().addComponents(menuButton);

            // create page
            embed = createSupportPage(user);
            componentsList = [buttonRow];
        };

        // ping page
        if (value === 'ping') {
            // add component to rows
            const buttonRow = new MessageActionRow().addComponents(menuButton);

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