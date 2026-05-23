// import custom functions
const createEmbed = require('../../utils/embed');
const ensureProfile = require('../../utils/ensureProfile');

// import an single functions from various exports
const { getXpNeeded } = require('../../utils/levelSystem');

// import achievements list
const achievementsList = require('../../structures/achievementsList');

// return an embed with the page
module.exports = function createProfilePage(client, user) {
    // get the user profile
    const profile = ensureProfile(client, user);

    return (
        createEmbed(user)
            .addFields([{
                name: '👤 **Status**',
                value: `>>> ⏳ **Lv.${profile.rpg.level}『 ${profile.rpg.xp} / ${getXpNeeded(profile.rpg.level)}xp 』**💸 **R$${profile.rpg.money}**\n🧿 **Personalidade: ${profile.karma.personality}**\n📚 **Mensagens: ${profile.stats.messages}**\n📡 **Comandos: ${profile.stats.commands}**\n🏆 **Conquistas: 『${profile.honor.achievements.length} / ${achievementsList.length}』**`
            }])
            .setImage('https://i.pinimg.com/originals/fb/7d/25/fb7d25365c6f2deca04b86f35c8fee63.gif')
    );
};