// discord
const { MessageActionRow } = require('discord.js');

// import custom functions
const createButton = require('../../utils/button.js');
const createSelect = require('../../utils/select.js');

// import custom pages
const home = require('../../components/homePage.js');

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
        const embed = home(interaction.user);

        // select
        const homePageSelect = createSelect({
            customId: 'homePageSelect',
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
        const homePageButton = createButton({
            customId: 'homePageButton',
            label: '🏠 Menu principal',
            user: interaction.user
        }).setDisabled(true);

        // rows
        const selectRow = new MessageActionRow().addComponents(homePageSelect);
        const buttonRow = new MessageActionRow().addComponents(homePageButton);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: [selectRow, buttonRow]
        });
    }
};