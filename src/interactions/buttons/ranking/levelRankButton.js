// discord imports
const { MessageActionRow } = require('discord.js');

// import custom components
const createLevelRankPage = require('../../../components/embeds/ranking/levelRank');
const createMoneyRankButton = require('../../../components/buttons/ranking/moneyRank');
const createLevelRankButton = require('../../../components/buttons/ranking/levelRank');
const createHomeButton = require('../../../components/buttons/homePage');

module.exports = {
    customId: 'levelRankButton',
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

        // embed
        const embed = createMoneyRankPage(client, user);
        
        // rank buttons
        const moneyRankButton = createMoneyRankButton(user).setLabel('🔃');

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