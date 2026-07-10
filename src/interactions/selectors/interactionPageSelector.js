// discord imports
const { MessageActionRow } = require('discord.js');

// import custom interactions
const createMenuButton = require('../../components/buttons/menuPage');
const createInteractionSelectorPage = require('../../components/embeds/interaction/interactionSelectorPage');

// select
module.exports = {
    customId: 'interactionPageSelector',
    async execute(interaction) {
        const [id, ownerId] = interaction.customId.split(':');

        // get client, user and guild
        const user = interaction.user;
        const client = interaction.client;
        const guild = interaction.guild;

        // user restriction
        if (ownerId && interaction.user.id !== ownerId) {
            return interaction.reply({
                content: '❌ Isso não é pra você!',
                ephemeral: true
            });
        };

        const value = interaction.values?.[0];

        // get target
        const target = await guild.members.fetch(`${value}`);

        // safety check
        if (!value) {
            return interaction.reply({
                content: '⚠️ Nenhuma opção selecionada.',
                ephemeral: true
            });
        };

        // menu button
        const menuButton = createMenuButton(user);

        // rows
        const buttonRow = new MessageActionRow().addComponents(menuButton);

        // create an interaction selector page
        const interactionSelector = createInteractionSelectorPage(user, target.user);

        // reset embed
        return interaction.update({
            embeds: [interactionSelector],
            components: [buttonRow]
        });
    }
};