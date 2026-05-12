// command
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow } = require('discord.js');

// import custom functions
const createEmbed = require('../utils/embed.js');
const createSelect = require('../utils/select.js');
const createButton = require('../utils/button.js');

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
        const embed = createEmbed({ user });

        embed.setTitle('🏠 Página inicial');
        embed.setDescription('Escolha uma página no seletor abaixo.');

        // select
        const menuSelect = createSelect({
            customId: 'menuSelect',
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
        const menuButton = createButton({
            customId: 'menuButton',
            label: '🏠 Menu principal',
            user
        }).setDisabled(true);

        // rows
        const selectRow = new MessageActionRow().addComponents(menuSelect);
        const buttonRow = new MessageActionRow().addComponents(menuButton);

        // reply
        return ctx.reply({
            embeds: [embed],
            components: [selectRow, buttonRow]
        });
    }
};