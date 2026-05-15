// discord imports
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow } = require('discord.js');

// import custom components
const createHomePage = require('../components/embeds/homePage.js');
const createHomeSelect = require('../components/selects/homePage.js');

module.exports = {
    // slash data
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Menu principal'),

    // prefix name
    name: 'menu',

    // execute
    async execute(ctx, args) {
        // get user
        const user = ctx.user || ctx.author;

        // embed
        const embed = createHomePage(user);

        // select
        const select = createHomeSelect(user);

        // rows
        const selectRow = new MessageActionRow().addComponents(select);

        // reply
        return ctx.reply({
            embeds: [embed],
            components: [selectRow]
        });
    }
};