// discord imports
const { MessageActionRow } = require('discord.js');

// import custom functions
const createEmbed = require('../../utils/embed');

module.exports = {
    customId: 'profilePageSelector',
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

        // option 1
        if (value === '1') {
            const embed = createEmbed({});
        };

        return interaction.update({
            embeds: [embed],
            components: componentsList
        });
    }
};