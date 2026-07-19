// modal
const { TextInputComponent } = require('discord.js');

module.exports = function createModal(options = {}) {
    const {
        customId = 'defaultModal',
        label = 'ℹ️ Modal de exemplo',
        style = 'SHORT',
        placeholder,
        value,
        minLength,
        maxLength,
        required = true
    } = options;

    const modal = new TextInputComponent()
        .setCustomId(customId)
        .setLabel(label)
        .setStyle(style)
        .setRequired(required);

    if (placeholder) modal.setPlaceholder(placeholder);

    if (value) modal.setValue(value);

    if (minLength !== undefined) {
        modal.setMinLength(minLength);
    };

    if (maxLength !== undefined) {
        modal.setMaxLength(maxLength);
    };

    return modal;
};