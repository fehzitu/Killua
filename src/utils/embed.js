const { MessageEmbed } = require('discord.js');

// create embed
module.exports = function createEmbed(user, tag = false) {
    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter({ text: 'Atualizado' });

    if (tag) {
        embed.setAuthor({
            name: `@${user.username}`,
            iconURL: user.displayAvatarURL({ dynamic: true })
        });
    };

    return embed;
};