// discord imports
const { MessageActionRow } = require('discord.js');

// import custom components
const createMoneyRankPage = require('../../../components/embeds/ranking/moneyRank');
const createMoneyRankButton = require('../../../components/buttons/ranking/moneyRank');
const createHomeButton = require('../../../components/buttons/homePage');

module.exports = {
    customId: 'moneyRankButton',
    async execute(interaction) {
        const [id, ownerId] = interaction.customId.split(':');

        // get client and user
        const user = interaction.user;
        const client = interaction.client;

        // user restriction
        if (ownerId && interaction.user.id !== ownerId) {
            return interaction.reply({
                content: '❌ Isso não é pra você!',
                ephemeral: true
            });
        };

        // home embed
        const embed = createMoneyRankPage(client, user);
        
        // money rank button
        const moneyRankButton = createMoneyRankButton(user).setDisabled(true);

       // menu button
        const homeButton = createHomeButton(user);

        // rows
        const buttonRow = new MessageActionRow().addComponents(moneyRankButton);
        const buttonRow2 = new MessageActionRow().addComponents(homeButton);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: [buttonRow, buttonRow2]
        });
    }
};