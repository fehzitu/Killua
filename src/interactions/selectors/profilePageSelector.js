// discord imports
const { MessageActionRow } = require('discord.js');

// import custom pages
const createProfilePage = require('../../components/embeds/menu/profilePage');
const createAchievementsPage = require('../../components/embeds/achievement/achievementsPage');

// import custom interactions
const createMenuButton = require('../../components/buttons/menuPage');
const createProfileSelector = require('../../components/selectors/profilePage');

module.exports = {
    customId: 'profilePageSelector',
    async execute(interaction) {
        const [id, ownerId] = interaction.customId.split(':');

        // get client and user
        const user = interaction.user;
        const client = interaction.client;

        // user restriction
        if (ownerId && user.id !== ownerId) {
            return interaction.reply({
                content: '❌ Isso não é pra você!',
                ephemeral: true
            });
        };

        // profile page embed
        const profilePage = createProfilePage(client, user);

        // profile page selector
        const profilePageSelector = createProfileSelector(user);

        // menu button
        const menuButton = createMenuButton(user);

        // rows
        const profileSelectorRow = new MessageActionRow().addComponents(profilePageSelector);
        const profileButtonRow = new MessageActionRow().addComponents(menuButton);

        // selected value
        const value = interaction.values?.[0];
        
        // create an achievement page
        const achievementsPage = createAchievementsPage(client, user, value);

        // reset embed
        return interaction.update({
            embeds: [achievementsPage],
            components: [profileSelectorRow, profileButtonRow]
        });
    }
};