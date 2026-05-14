// command
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow } = require('discord.js');

// import custom functions
const createSelect = require('../utils/select.js');

// import custom components
const createHomePage = require('../components/embeds/homePage.js');
const createHomeButton = require('../components/buttons/homePage.js');

module.exports = {
    // slash data
    data: new SlashCommandBuilder()
        .setName('teste')
        .setDescription('Interações de teste'),

    // prefix name
    name: 'teste',

    // execute
    async execute(ctx, args) {
        // get user
        const user = ctx.user || ctx.author;

        // embed
        const embed = createHomePage(user);

        // select
        const homePageSelect = createSelect({
            customId: 'homePageSelect',
            user: user,
            placeholder: 'Escolha uma página',
            optionsList: [
                {
                    label: 'Configurações',
                    description: 'Ver configurações',
                    value: 'test'
                }
            ]
        });

        // back button
        const button = createHomeButton(user);

        // rows
        const selectRow = new MessageActionRow().addComponents(homePageSelect);
        const buttonRow = new MessageActionRow().addComponents(button);

        // reply
        return ctx.reply({
            embeds: [embed],
            components: [selectRow, buttonRow]
        });
    }
};