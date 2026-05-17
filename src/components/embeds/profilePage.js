// import custom functions
const createEmbed = require('../../utils/embed');
const ensureProfile = require('../../utils/ensureProfile');

// return an embed with the page
module.exports = function createProfilePage(client, user) {
    // get the user profile
    const profile = ensureProfile(client, user);

    return (
        createEmbed(user)
            .addFields([{
                name: `👤 **${user.globalName}**`,
                value: `>>> ⏳ **Lv.${profile.rpg.level}『 ${profile.rpg.xp}xp / ${Math.floor(100 * Math.pow(profile.rpg.level + 1, 1.5))}xp 』**\n🧿 **Personalidade: ${profile.karma.personality}**\n💰 **Saldo: R$${profile.rpg.money}**\n📚 **Mensagens: ${profile.stats.messages}**\n📡 **Comandos: ${profile.stats.commands}**`
            }])
            .setImage('https://i.pinimg.com/originals/fb/7d/25/fb7d25365c6f2deca04b86f35c8fee63.gif')
            .setTimestamp()
    );
};