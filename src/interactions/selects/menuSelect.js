// discord
const { MessageActionRow } = require('discord.js');

// import custom functions
const createEmbed = require('../../utils/embed.js');
const createButton = require('../../utils/button.js');
const createSelect = require('../../utils/select.js');

module.exports = {
    customId: 'menuSelect',
    async execute(interaction) {
        const [id, ownerId] = interaction.customId.split(':');

        // user restriction
        if (ownerId && interaction.user.id !== ownerId) {
            return interaction.reply({
                content: '❌ Isso não é pra você!',
                ephemeral: true
            });
        };

        // get selected value
        const value = interaction.values?.[0];

        // create embed
        const embed = createEmbed({ user: interaction.user });

        // profile page
        if (value === 'profile') {
            embed
                .setTitle('👤 Perfil')
                .setDescription('Essa é a página de perfil.');
        };

        // settings page
        if (value === 'settings') {
            embed
                .setTitle('⚙️ Configurações')
                .setDescription('Essa é a página de configurações.');
        };

        // recreate select
        const menuSelect = createSelect({
            customId: 'menuSelect',
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

        // back button
        const menuButton = createButton({
            customId: 'menuButton',
            label: '🏠 Menu principal',
            user: interaction.user
        }).setDisabled(false);

        // rows
        const selectRow = new MessageActionRow().addComponents(menuSelect);
        const buttonRow = new MessageActionRow().addComponents(menuButton);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: [selectRow, buttonRow]
        });
    }
};