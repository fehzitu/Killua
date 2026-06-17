// discord imports
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow } = require('discord.js');

// import custom components
const createMenuPage = require('../components/embeds/menu/menuPage');
const createMenuSelect = require('../components/selectors/menuPage');

module.exports = {
    // slash data
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Menu principal'),

    // prefix name
    name: 'menu',

    // execute
    async execute(ctx, args) {
        // get client and user
        const client = ctx.client;
        const user = ctx.user || ctx.author;

        // embed
        const embed = createMenuPage(user);

        // select
        const select = createMenuSelect(user);

        // rows
        const selectRow = new MessageActionRow().addComponents(select);

        // reply
        return ctx.reply({
            embeds: [embed],
            components: [selectRow]
        });
    }
};