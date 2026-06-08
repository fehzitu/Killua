// import custom functions
const createEmbed = require('../../utils/components/embed');

module.exports = {
    // "name" will receive the value that will be the chat message that the bot captures as a command
    name: 'guildMemberAdd',
    async execute(client, member) {
        // get channel
        const channel = member.guild.systemChannel;

        // log if dont have a channel to send the embed
        if (!channel) {
            console.log('🔴 Canal não encontrado!');
            return;
        };

        // create an embed
        const embed = createEmbed(member.user)
            .setTitle('👥 **Novo membro!**')
            .setDescription(`📡 **Salve ${member}, tudo bom?**`)
            .addFields([
                {
                    name: '🛡 **Tag**',
                    value: `**#${member.user.tag} (${member.user.tag})**`,
                    inline: true
                },
                {
                    name: '👥 **Id**',
                    value: `**<@${member.id}> (${member.id})**`,
                    inline: true
                }
            ]);

        await channel.send({
            embeds: [embed]
        });
    }
};