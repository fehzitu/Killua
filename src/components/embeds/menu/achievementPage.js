// import custom functions
const createEmbed = require('../../../utils/components/embed');

// import achievements list
const achievementsList = require('../../../structures/achievementsList');

// return an embed with the page
module.exports = function createAchievementPage(user) {
    // get achievements list
    let list = '';

    // clean list map
    achievementsList.map((a) => list += `**${a.icon} ${a.name} (${a.rarity})\n🎯 ${a.goal}\n✨️ Recompensa: Xp: ${a.reward.xp} Dinheiro: R$${a.reward.money}**\n\n`);

    return (
        createEmbed(user)
            .addFields([{
                name: '🏅 **Lista completa das conquistas**',
                value: list
            }])
    );
};