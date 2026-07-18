// discord implements
const { Modal, TextInputComponent, MessageActionRow } = require('discord.js');

// create a modal
function createModal(customId, title, components = []) {
    return new Modal()
        .setCustomId(customId)
        .setTitle(title)
        .addComponents(components);
};

// create a text input
module.exports = function createTextInput(customId, label, style = 'SHORT', required = true, placeholder = '', value = '', minLength, maxLength) {
    const input = new TextInputComponent()
        .setCustomId(customId)
        .setLabel(label)
        .setStyle(style)
        .setRequired(required);

    if (placeholder) input.setPlaceholder(placeholder);
    if (value) input.setValue(value);
    if (minLength !== undefined) input.setMinLength(minLength);
    if (maxLength !== undefined) input.setMaxLength(maxLength);

    return input;
};