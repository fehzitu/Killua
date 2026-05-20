// import custom functions
const constants = require('../../config/constants');
const checkCooldown = require('../../utils/cooldown');
const createEmbed = require('../../utils/embed');
const ensureProfile = require('../../utils/ensureProfile');
const log = require('../../utils/logger');

// import an single functions from various exports
const { checkLevelUp } = require('../../utils/levelSystem');

// safe execution
async function safeExecute(handler, interaction) {
    try {
        return await handler.execute(interaction);
    } catch (error) {
        log('ERROR', `Erro na interação: ${error.message}`);

        if (!interaction.replied && !interaction.deferred) {
            await interaction.reply({
                content: 'Erro ao executar interação',
                ephemeral: true
            });
        };
    }
};

module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        // get user id and tag
        const user = interaction.user;
        const userId = interaction.user.id;
        const userTag = interaction.user.tag;

        // get user profile
        const profile = ensureProfile(client, user);

        // buttons
        if (interaction.isButton()) {
            const id = interaction.customId.split(':')[0];
            const button = client.interactions.get(id);

            if (!button) {
                log('WARNING', `Botão não encontrado: ${interaction.customId}`);
                return;
            };

            // log('RESET', `Botão: ${id} usado por ${userTag}`);

            return safeExecute(button, interaction);
        };

        // select menus
        if (interaction.isSelectMenu()) {
            const id = interaction.customId.split(':')[0];
            const select = client.interactions.get(id);

            if (!select) {
                log('WARNING', `Seletor não encontrado: ${interaction.customId}`);
                return;
            };

            // log('RESET', `Seletor: ${id} usado por ${userTag}`);

            return safeExecute(select, interaction);
        };

        // modals
        if (interaction.isModalSubmit()) {
            const id = interaction.customId.split(':')[0];
            const modal = client.interactions.get(id);

            if (!modal) {
                log('WARNING', `Modal não encontrado: ${interaction.customId}`);
                return;
            };

            // log('RESET', `Modal: ${id} usado por ${userTag}`);

            return safeExecute(modal, interaction);
        };

        // slash commands
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) {
            log('ERROR', `Comando não encontrado: ${interaction.commandName}`);
            return;
        };

        // cooldown
        const remaining = checkCooldown(userId, constants.COOLDOWNS.COMMAND);

        if (remaining > 0) {
            const seconds = (remaining / 1000).toFixed(1);

            const embed = createEmbed(interaction.user);

            embed.setDescription(`⏳ Sem spam!\nEspere **${seconds}s** para usar novamente.`);

            return interaction.reply({
                embeds: [embed],
                ephemeral: true
            });
        };

        // formated info
        const guild = interaction.guild ? interaction.guild.name : 'DM';
        const channel = interaction.guild ? interaction.channel.name : 'DM';

        // add stats
        profile.stats.commands++;

        // command log
        log('RESET', `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} @${userTag} ${guild} ${channel}]: /${interaction.commandName}`);

        try {
            await command.execute(interaction);
            // log('WARNING', `Comando /${interaction.commandName} usado por ${userTag}`);

            // add xp
            profile.rpg.xp += 100;

            const resultLevel = checkLevelUp(profile);

            // level up message
            if (resultLevel.leveledUp) {
                const levelMsg = `🎉 **${interaction.user} subiu para o nível ${resultLevel.level}**!`;

                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: levelMsg
                    });
                } else {
                    await interaction.reply({
                        content: levelMsg
                    });
                };
            };
        } catch (error) {
            log('ERROR', `Erro no comando (${interaction.commandName}): ${error.message}`);

            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({
                    content: 'Erro ao executar comando.',
                    ephemeral: true
                });
            } else {
                await interaction.reply({
                    content: 'Erro ao executar comando.',
                    ephemeral: true
                });
            };
        };
    }
};