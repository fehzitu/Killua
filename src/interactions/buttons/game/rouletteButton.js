// discord imports
const { MessageActionRow } = require('discord.js');

// import custom components
const createRoulettePage = require('../../../components/embeds/game/roulettePage');
const createMenuButton = require('../../../components/buttons/menuPage');

// import custom values buttons
const createRouletteValueButton = require('../../../components/buttons/game/rouletteValue');

module.exports = {
    customId: 'rouletteButton',
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

        // embed
        const embed = createRoulettePage(user);

        // values
        const red100 = createRouletteValueButton(user, 100, 'red').setStyle('DANGER').setDisabled(true);
        const black100 = createRouletteValueButton(user, 100, 'black').setStyle('SECONDARY').setDisabled(true);

       // menu button
        const menuButton = createMenuButton(user);

        // rows
        const buttonRow = new MessageActionRow().addComponents(red100);
        const buttonRow2 = new MessageActionRow().addComponents(black100);
        const buttonRow3 = new MessageActionRow().addComponents(menuButton);

        // edit message
        return interaction.update({
            embeds: [embed],
            components: [buttonRow, buttonRow2, buttonRow3]
        });
    }
};