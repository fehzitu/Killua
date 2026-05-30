// discord imports
const { MessageActionRow } = require('discord.js');

// import custom components
const createHomePage = require('../../../components/embeds/homePage');
const createMoneyRankButton = require('../../../components/buttons/ranking/moneyRank');

module.exports = {
    customId: 'homePageButton',
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
        const embed = createHomePage(interaction.user);
        
        // money rank button button
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