const { Modal, MessageActionRow, TextInputComponent } = require('discord.js');

module.exports = function createModal(options = {}) {
    const {
        modalId = 'defaultModal',
        title = '🧪 Modal de teste',
        inputId = 'text',
        label = 'Escreva algo',
        style = 'SHORT',
        placeholder = 'Esse é apenas um modal de teste',
        value = '',
        minLength = 1,
        maxLength = 50,
        required = true
    } = options;

    const input = new TextInputComponent()
        .setCustomId(inputId)
        .setLabel(label)
        .setStyle(style)
        .setPlaceholder(placeholder)
        .setRequired(required)
        .setMinLength(minLength)
        .setMaxLength(maxLength);

    if (value) {
        input.setValue(value);
    };

    const row = new MessageActionRow()
        .addComponents(input);

    return new Modal()
        .setCustomId(modalId)
        .setTitle(title)
        .addComponents(row);
};