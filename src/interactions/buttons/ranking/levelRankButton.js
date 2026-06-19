// discord imports
const { MessageActionRow } = require('discord.js');

// import custom components
const createLevelRankPage = require('../../../components/embeds/ranking/levelRank');
const createMoneyRankButton = require('../../../components/buttons/ranking/moneyRank');
const createLevelRankButton = require('../../../components/buttons/ranking/levelRank');
const createMessageRankButton = require('../../../components/buttons/ranking/messageRank');
const createMenuButton = require('../../../components/buttons/menuPage');

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
        const embed = createLevelRankPage(client, user);
        
        // rank buttons
        const moneyRankButton = createMoneyRankButton(user);
        const levelRankButton = createLevelRankButton(user).setLabel('🔃');
        const messageRankButton = createMessageRankButton(user);

       // menu button
        const menuButton = createMenuButton(user);

        // rows
        const buttonRow = new MessageActionRow().addComponents(moneyRankButton, levelRankButton, messageRankButton);
        const buttonRow2 = new MessageActionRow().addComponents(menuButton);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: [buttonRow, buttonRow2]
        });
    }
};