module.exports = {
    customId: 'defaultModal',
    async execute(interaction) {
        const [, fields = ''] = interaction.customId.split(':');

        const ids = fields.split(',').filter(Boolean);

        let content = '✅ **Modal de teste funcionando!**\n';

        ids.forEach((id, index) => {
            const value = interaction.fields.getTextInputValue(id);
            console.log(ids);

            content += `**Campo ${index + 1}:** ${value}\n`;
        });

        await interaction.reply({
            content
        });
    }
};