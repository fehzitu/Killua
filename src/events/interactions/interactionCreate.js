// import custom functions
const config = require('../../config');
const constants = require('../../config/constants');
const checkCooldown = require('../../utils/cooldown');
const ensureProfile = require('../../utils/ensureProfile');
const createEmbed = require('../../utils/embed');
const log = require('../../utils/logger');
const checkMessageAchievements = require('../../utils/achievements/checkMessageAchievements');
const checkCommandAchievements = require('../../utils/achievements/checkCommandAchievements');
const checkLevelAchievements = require('../../utils/achievements/checkLevelAchievements');

// import an single function from various exports
const { checkLevelUp } = require('../../utils/levelSystem');
const { createLevelUpMessage } = require('../../structures/defaultMessages');

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

        // formated info
        const guild = interaction.guild ? interaction.guild.name : 'DM';
        const channel = interaction.guild ? interaction.channel.name : 'DM';

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

        // add stats
        profile.stats.commands++;

        try {
            // add xp
            profile.rpg.xp += 100;

            // check level
            const resultLevel = checkLevelUp(profile);

            // level up message
            const levelUpEmbed = createLevelUpMessage(interaction.user, resultLevel.level);

            // level up message
            if (resultLevel.leveledUp) {
                // send level up message
                await interaction.channel.send({
                    embeds: [levelUpEmbed]
                });
            };

            // check level achievements
            const unlockedLevels = checkLevelAchievements(profile);
            
            // send achievement messages
            for (const achievement of unlockedLevels) {
                const content =
                    `🏆 **Conquista desbloqueada!**\n` +
                    `${achievement.icon} **${achievement.name}**\n` +
                    `${achievement.description}\n\n` +
                    `✨ +${achievement.reward?.xp || 0} XP\n` +
                    `💰 +$${achievement.reward?.money || 0}`;
            
                await interaction.channel.send({
                    content
                });
            };

            // check command achievements
            const unlocked = checkCommandAchievements(profile);
            
            // send achievement messages
            for (const achievement of unlocked) {
                const content =
                    `🏆 **Conquista desbloqueada!**\n` +
                    `${achievement.icon} **${achievement.name}**\n` +
                    `${achievement.description}\n\n` +
                    `✨ +${achievement.reward?.xp || 0} XP\n` +
                    `💰 +$${achievement.reward?.money || 0}`;
    
                await interaction.channel.send({
                    content
                });
            };

            // try execute command
            await command.execute(interaction);
            // log('WARNING', `Comando /${interaction.commandName} usado por ${userTag}`);

            // command log
            log('RESET', `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} @${userTag} ${guild} ${channel}]: /${interaction.commandName}`);
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