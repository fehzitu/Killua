// discord imports
const { MessageActionRow } = require('discord.js');

// import custom interactions
const createMenuButton = require('../../components/buttons/menuPage');
const createInteractionSelectorPage = require('../../components/embeds/interaction/interactionSelectorPage');

// import custom positive interactions buttons
const createKissButton = require('../../components/buttons/interaction/kiss');
const createHugButton = require('../../components/buttons/interaction/hug');
const createGreetButton = require('../../components/buttons/interaction/greet');
const createLaughtButton = require('../../components/buttons/interaction/laught');
const createPartyButton = require('../../components/buttons/interaction/party');

// import custom negative interactions buttons
const createPunchButton = require('../../components/buttons/interaction/punch');
const createKickButton = require('../../components/buttons/interaction/kick');
const createSlapButton = require('../../components/buttons/interaction/slap');
const createProvokeButton = require('../../components/buttons/interaction/provoke');
const createKillButton = require('../../components/buttons/interaction/kill');


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

        // positive interaction buttons
        const kissButton = createKissButton(user, target).setStyle('SUCCESS');
        const hugButton = createHugButton(user).setStyle('SUCCESS').setDisabled(true);
        const greetButton = createGreetButton(user).setStyle('SUCCESS').setDisabled(true);
        const laughtButton = createLaughtButton(user).setStyle('SUCCESS').setDisabled(true);
        const partyButton = createPartyButton(user).setStyle('SUCCESS').setDisabled(true);

        // negative interaction buttons
        const punchButton = createPunchButton(user).setStyle('DANGER').setDisabled(true);
        const kickButton = createKickButton(user).setStyle('DANGER').setDisabled(true);
        const slapButton = createSlapButton(user).setStyle('DANGER').setDisabled(true);
        const provokeButton = createProvokeButton(user).setStyle('DANGER').setDisabled(true);
        const killButton = createKillButton(user).setStyle('DANGER').setDisabled(true);

        // rows
        const buttonRow = new MessageActionRow().addComponents(kissButton, hugButton, greetButton, laughtButton, partyButton);
        const buttonRow2 = new MessageActionRow().addComponents(punchButton, kickButton, slapButton, provokeButton, killButton);
        const buttonRow3 = new MessageActionRow().addComponents(menuButton);

        // create an interaction selector page
        const interactionSelector = createInteractionSelectorPage(user, target.user);

        // reset embed
        return interaction.update({
            embeds: [interactionSelector],
            components: [buttonRow, buttonRow2, buttonRow3]
        });
    }
};