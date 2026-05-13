// command
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow } = require('discord.js');

// import custom functions
const createSelect = require('../utils/select.js');
const createButton = require('../utils/button.js');

// import custom pages
const home = require('../components/homePage.js');

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
        const embed = home(user);

        // select
        const homeSelect = createSelect({
            customId: 'homeSelect',
            user,
            placeholder: 'Escolha uma página',
            optionsList: [
                {
                    label: 'Perfil',
                    description: 'Ver perfil do usuário',
                    value: 'profile'
                },
                {
                    label: 'Configurações',
                    description: 'Ver configurações',
                    value: 'settings'
                }
            ]
        });

        // back button
        const homeButton = createButton({
            customId: 'homeButton',
            label: '🏠 Menu principal',
            user
        }).setDisabled(true);

        // rows
        const selectRow = new MessageActionRow().addComponents(homeSelect);
        const buttonRow = new MessageActionRow().addComponents(homeButton);

        // reply
        return ctx.reply({
            embeds: [embed],
            components: [selectRow, buttonRow]
        });
    }
};