// discord imports
const { MessageActionRow } = require('discord.js');

// import custom components
const createEmbed = require('../../../utils/components/embed');

module.exports = {
    customId: 'kissButton',
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
        const embed = createEmbed(user);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: []
        });
    }
};