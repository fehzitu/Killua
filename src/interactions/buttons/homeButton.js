// discord
const { MessageActionRow } = require('discord.js');

// import custom functions
const createEmbed = require('../../utils/embed.js');
const createButton = require('../../utils/button.js');
const createSelect = require('../../utils/select.js');

module.exports = {
    customId: 'homeButton',
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
        const embed = createEmbed({ user: interaction.user });

        embed
            .setTitle('🏠 Página inicial')
            .setDescription('Escolha uma página no seletor abaixo.');

        // select
        const homeSelect = createSelect({
            customId: 'homeSelect',
            user: interaction.user,
            placeholder: 'Escolha uma página',
            optionsList: [
                {
                    label: 'Perfil',
                    description: 'Ver perfil do usuário',
                    value: 'profile'
                },
                {
                    label: 'Configurações',
                    description: 'Ver configurações',
                    value: 'settings'
                }
            ]
        });

        // disabled back button
        const homeButton = createButton({
            customId: 'homeButton',
            label: '🏠 Menu principal',
            user: interaction.user
        }).setDisabled(true);

        // rows
        const selectRow = new MessageActionRow().addComponents(homeSelect);
        const buttonRow = new MessageActionRow().addComponents(homeButton);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: [selectRow, buttonRow]
        });
    }
};