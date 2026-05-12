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
        const embed = createEmbed({ user })
        .addFields([{
                name: '**💫 Menu de interação**',
                value: '**👤: Perfil - ``Acessa os dados do perfil``\n🎮: Jogos - ``Lista de jogos``\n📄: Comandos - ``Lista de comandos``\n🏆: Ranking - ``Lista de ranking``\n⚙️: Informações - ``Infos do bot``\n❓: Suporte - ``Suporte do bot``**'
            }])
        .setImage('https://cdn.discordapp.com/attachments/1477290272638632068/1492176849478881481/6D1510C7-334E-4562-BA2F-7AC458BE2AF2.gif?ex=69dbb2fc&is=69da617c&hm=de7e998bd6a0ae9d05ec1cba4480b5f9faf69a1b3d5da212775d70d863302e3e&')
        .setTimestamp()
/*
        embed.setTitle('🏠 Página inicial');
        embed.setDescription('Escolha uma página no seletor abaixo.');
*/
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