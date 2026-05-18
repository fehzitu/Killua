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
                name: '👤 **Status**',
                value: `>>> ⏳ **Lv.${profile.rpg.level}『 ${profile.rpg.xp}xp / ${Math.floor(100 * Math.pow(profile.rpg.level + 1, 1.5))}xp 』**💸 **R$${profile.rpg.money}**\n🧿 **Personalidade: ${profile.karma.personality}**\n📚 **Mensagens: ${profile.stats.messages}**\n📡 **Comandos: ${profile.stats.commands}**`
            },
            {
                name: '🎖️ **Honra**',
                value: `>>> 🏆 **Conquistas: 『${profile.honor.achievements.length} / 50』**\n🏅 **Medalhas: 『${profile.honor.medals.length} / 25』**\n✨ **Prestigio: 『${profile.honor.prestige.length} / 15』**`
            }])
            .setImage('https://i.pinimg.com/originals/fb/7d/25/fb7d25365c6f2deca04b86f35c8fee63.gif')
    );
};