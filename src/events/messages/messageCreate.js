// import custom functions
const config = require('../../config');
const constants = require('../../config/constants');
const checkCooldown = require('../../utils/systems/cooldown');
const ensureProfile = require('../../utils/custom/ensureProfile');
const createEmbed = require('../../utils/components/embed');
const log = require('../../utils/systems/logger');
const checkMessageAchievements = require('../../utils/achievements/checkMessageAchievements');
const checkCommandAchievements = require('../../utils/achievements/checkCommandAchievements');
const checkLevelAchievements = require('../../utils/achievements/checkLevelAchievements');
const checkRoleAchievements = require('../../utils/achievements/checkRoleAchievements');

// import an single function from various exports
const { checkLevelUp } = require('../../utils/systems/levelSystem');
const { createLevelUpMessage } = require('../../structures/defaultMessages');
const { createAchievementsMessage } = require('../../structures/defaultMessages');

module.exports = {
    name: 'messageCreate',
    async execute(client, message) {
        // ignore bots
        if (message.author.bot) return;

        // get user id and tag
        const user = message.author;
        const userId = message.author.id;
        const userTag = message.author.tag;

        // get user profile
        const profile = ensureProfile(client, user);

        // log message
        const guild = message.guild ? message.guild.name : 'Mensagem';
        const channel = message.guild ? message.channel.name : 'privada';

        // message log
        log('RESET', `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} @${userTag} ${guild} ${channel}]: ${message.content}`);

        // add xp
        profile.rpg.xp += 50;
        profile.rpg.totalXp += 50;

        // check xp
        const messageResult = checkLevelUp(profile);

        // level up message
        const levelUpEmbed = createLevelUpMessage(message.author, messageResult.level);

        // check xp result
        if (messageResult.leveledUp) {
            if (message.channel) message.channel.send({
                embeds: [levelUpEmbed]
            });
        };

        // check level achievements
        const unlockedLevels = checkLevelAchievements(profile);
        
        // send achievement messages
        for (const achievement of unlockedLevels) {
            // achievement message
            const achievementEmbed = createAchievementsMessage(message.author, achievement);

            await message.channel.send({
                embeds: [achievementEmbed]
            });
        };

        // check role
        const roleResult = checkRoleAchievements(profile);

        // send achievement messages
        for (const achievement of roleResult) {
            // achievement message
            const achievementEmbed = createAchievementsMessage(message.author, achievement);

            await message.channel.send({
                embeds: [achievementEmbed]
            });
        };

        // prefix
        const prefix = config.prefix;

        // check prefix
        if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) {
            // add stats
            profile.stats.messages++;

           // check achievements
            const unlocked = checkMessageAchievements(profile);

            // send achievement messages
            for (const achievement of unlocked) {
                // achievement message
                const achievementEmbed = createAchievementsMessage(message.author, achievement);

                await message.channel.send({
                    embeds: [achievementEmbed]
                });
            };

            return;
        };

        // args
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift()?.toLowerCase();

        // get command
        const command = client.commands.get(commandName);

        if (!command) {
            log('WARNING', `Comando desconhecido: ${commandName}`);
            return;
        };

        // cooldown
        const remaining = checkCooldown(userId, constants.COOLDOWNS.COMMAND);

        if (remaining > 0) {
            const seconds = (remaining / 1000).toFixed(1);

            const embed = createEmbed(message.author);

            embed.setDescription(`⏳ Sem spam!\nEspere **${seconds}s** para usar novamente.`);

            return message.channel.send({
                embeds: [embed]
            });
        };

        // add stats
        profile.stats.commands++;

        // check command achievements
        const unlockedCommands = checkCommandAchievements(profile);
        
        // send achievement messages
        for (const achievement of unlockedCommands) {
            // achievement message
            const achievementEmbed = createAchievementsMessage(message.author, achievement);

            await message.channel.send({
                embeds: [achievementEmbed]
            });
        };

        // command log
        log('WARNING', `Comando k.${commandName} usado por ${userTag}`);

        // execute command
        try {
            // add an extra xp for commands
            profile.rpg.xp += 50;
            profile.rpg.totalXp += 50;

            // check xp
            const commandResult = checkLevelUp(profile);

            // check xp result
            if (commandResult.leveledUp) {
                if (message.channel) message.channel.send({
                    embeds: [levelUpEmbed]
                });
            };

            // check level achievements
            const unlockedLevels = checkLevelAchievements(profile);
            
            // send achievement messages
            for (const achievement of unlockedLevels) {
                // achievement message
                const achievementEmbed = createAchievementsMessage(message.author, achievement);

                await message.channel.send({
                    embeds: [achievementEmbed]
                });
            };

            // check role
            const roleResult = checkRoleAchievements(profile);
    
            // send achievement messages
            for (const achievement of roleResult) {
                // achievement message
                const achievementEmbed = createAchievementsMessage(message.author, achievement);
    
                await message.channel.send({
                    embeds: [achievementEmbed]
                });
            };

            // execute the command
            await command.execute(message, args);
        } catch (error) {
            log('ERROR', `Erro no comando (${commandName}): ${error.message}`);

            await message.channel.send({
                content: 'Erro ao executar comando.',
                ephemeral: true
            });
        };
    }
};