// discord imports
const { MessageActionRow } = require('discord.js');

// import custom components
const createMessageRankPage = require('../../../components/embeds/ranking/messageRank');
const createMoneyRankButton = require('../../../components/buttons/ranking/moneyRank');
const createLevelRankButton = require('../../../components/buttons/ranking/levelRank');
const createMessageRankButton = require('../../../components/buttons/ranking/messageRank');
const createAchievementRankButton = require('../../../components/buttons/ranking/achievementRank');
const createHomeButton = require('../../../components/buttons/homePage');

module.exports = {
    customId: 'messageRankButton',
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
        const embed = createMessageRankPage(client, user);
        
        // rank buttons
        const moneyRankButton = createMoneyRankButton(user);
        const levelRankButton = createLevelRankButton(user);
        const messageRankButton = createMessageRankButton(user).setLabel('🔃');
        const achievementRankButton = createAchievementRankButton(user);

       // menu button
        const homeButton = createHomeButton(user);

        // rows
        const buttonRow = new MessageActionRow().addComponents(moneyRankButton, levelRankButton, messageRankButton, achievementRankButton);
        const buttonRow2 = new MessageActionRow().addComponents(homeButton);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: [buttonRow, buttonRow2]
        });
    }
};