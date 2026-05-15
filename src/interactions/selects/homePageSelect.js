// import custom pages
const createEmbed = require('../../utils/embed.js');
const createHomeSelect = require('../../components/selects/homePage.js');

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

        // selected value
        const value = interaction.values?.[0];

        // support page
        if (value === 'support') {
            embed = createEmbed({ user: interaction.user })
                .setTitle('⚙️ Em manutenção')
                .setDescription('Essa é a página de teste.');
        };

        // select
        const select = createHomeSelect(user);

        // rows
        const selectRow = new MessageActionRow().addComponents(select);

        return interaction.update({
            embeds: [embed],
            components: [selectRow]
        });
    }
};