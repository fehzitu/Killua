// import custom functions
const config = require('../../config');
const constants = require('../../config/constants');
const checkCooldown = require('../../utils/cooldown');
const createEmbed = require('../../utils/embed');
const ensureProfile = require('../../utils/ensureProfile');
const log = require('../../utils/logger');

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
        const guild = message.guild ? message.guild.name : 'DM';
        const channel = message.guild ? message.channel.name : 'DM';

        // message log
        log('RESET', `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} @${userTag} ${guild} ${channel}]: ${message.content}`);

        // add xp
        profile.rpg.xp += 50;

        // check xp
        const result = checkLevelUp(profile);

        // check xp result
        if (result.leveledUp) {
            if (message.channel) {
                message.channel.send(`🎉 **${message.author} subiu para o nível ${result.level}**!`);
            };
        };

        // prefix
        const prefix = config.prefix;

        // check prefix
        if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) {
            // add stats
            profile.stats.messages++;
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

            return message.reply({
                embeds: [embed]
            });
        };


        // add stats
        profile.stats.commands++;

        // command log
        log('WARNING', `Comando k.${commandName} usado por ${userTag}`);

        // execute command
        try {
            await command.execute(message, args);
        } catch (error) {
            log('ERROR', `Erro no comando (${commandName}): ${error.message}`);
        };
    }
};