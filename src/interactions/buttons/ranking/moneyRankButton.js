// discord imports
const { MessageActionRow } = require('discord.js');

// import custom components
const createMoneyRankPage = require('../../../components/embeds/ranking/moneyRank');
const createMoneyRankButton = require('../../../components/buttons/ranking/moneyRank');

module.exports = {
    customId: 'moneyRankButton',
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
        const embed = createMoneyRankPage(interaction.user);
        
        // money rank button
        const moneyRankButton = createMoneyRankButton(interaction.user);

        // rows
        let buttonRow = new MessageActionRow().addComponents(moneyRankButton);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: [buttonRow]
        });
    }
};