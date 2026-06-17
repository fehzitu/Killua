// discord imports
const { MessageActionRow } = require('discord.js');

// import custom components
const createMenuPage = require('../../components/embeds/menu/menuPage');
const createMenuSelector = require('../../components/selectors/menuPage');

module.exports = {
    customId: 'menuPageButton',
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
        const embed = createMenuPage(user);

        // select
        const selector = createMenuSelector(user);

        // rows
        let selectorRow = new MessageActionRow().addComponents(selector);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: [selectorRow]
        });
    }
};