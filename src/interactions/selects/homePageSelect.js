// discord imports
const { MessageActionRow } = require('discord.js');

// import custom pages
const createEmbed = require('../../utils/embed.js');
const createHomeSelect = require('../../components/selects/homePage.js');
const createHomeButton = require('../../components/buttons/homePage.js');

module.exports = {
    customId: 'homePageSelect',
    async execute(interaction) {
        const [id, ownerId] = interaction.customId.split(':');

        // user restriction
        if (ownerId && interaction.user.id !== ownerId) {
            return interaction.reply({
                content: '❌ Isso não é pra você!',
                ephemeral: true
            });
        };

        // select
        const select = createHomeSelect(interaction.user);

        // button
        const button = createHomeButton(interaction.user).setDisabled(false);

        // rows
        const selectRow = new MessageActionRow().addComponents(select);
        const buttonRow = new MessageActionRow().addComponents(button);

        // components list
        let componentsList = [selectRow]

        // selected value
        const value = interaction.values?.[0];

        // support page
        if (value === 'support') {
            // create embed page
            embed = createEmbed(interaction.user)
                .setTitle('Titulo')
                .setDescription('Descrição');
            componentsList = [buttonRow];
        };

        return interaction.update({
            embeds: [embed],
            components: componentsList
        });
    }
};