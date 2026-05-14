// discord
const { MessageActionRow } = require('discord.js');

// import custom functions
const createEmbed = require('../../utils/embed.js');
const createSelect = require('../../utils/select.js');

// import custom pages
const createHomePage = require('../../components/embeds/homePage.js');

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

        // get selected value
        const value = interaction.values?.[0];

        // embed
        let embed = createEmbed(interaction.user);

        // settings page
        if (value === 'test') {
            embed = createEmbed({ user: interaction.user })
                .setTitle('⚙️ Em manutenção')
                .setDescription('Essa é a página de teste.');
        };

        // recreate select
        const homePageSelect = createSelect({
            customId: 'homePageSelect',
            user: interaction.user,
            placeholder: 'Escolha uma página',
            optionsList: [
                {
                    label: 'Configurações',
                    description: 'Ver configurações',
                    value: 'test'
                }
            ]
        });

        // edit message
        return interaction.update({
            embeds: [embed],
            components: []
        });
    }
};