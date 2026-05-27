// discord imports
const { MessageActionRow } = require('discord.js');

// import custom pages
const createProfilePage = require('../../components/embeds/profilePage');
const createAchievementsPage = require('../../components/embeds/achievementsPage');

// import custom interactions
const createHomeButton = require('../../components/buttons/homePage');
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

        // back to menu button
        const backHomeButton = createHomeButton(user);

        // rows
        const profileSelectorRow = new MessageActionRow().addComponents(profilePageSelector);
        const profileButtonRow = new MessageActionRow().addComponents(backHomeButton);

        // selected value
        const value = interaction.values?.[0];
        
        // create an achievement page
        const achievementsPage = createAchievementsPage(user, value);

        // reset embed
        return interaction.update({
            embeds: [achievementsPage],
            components: [profileSelectorRow, profileButtonRow]
        });
    }
};