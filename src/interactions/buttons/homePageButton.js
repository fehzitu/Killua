// discord imports
const { MessageActionRow } = require('discord.js');

// import custom components
const createHomePage = require('../../components/embeds/homePage');
const createHomeSelector = require('../../components/selectors/homePage');

module.exports = {
    customId: 'homePageButton',
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
        const embed = createHomePage(user);

        // select
        const selector = createHomeSelector(user);

        // rows
        let selectorRow = new MessageActionRow().addComponents(selector);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: [selectorRow]
        });
    }
};