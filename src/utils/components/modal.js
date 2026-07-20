// custom imports
const { Modal, MessageActionRow, TextInputComponent } = require('discord.js');

module.exports = function createModal(options = {}) {
    const {
        modalId = 'defaultModal',
        title = '🧪 Modal de teste',
        inputs = [{
            id: 'default_input',
            label: 'Escreva algo',
            style: 'SHORT',
            placeholder: 'Esse é apenas um modal de teste',
            value: '',
            minLength: 1,
            maxLength: 50,
            required: true
        }]
    } = options;

    const fieldIds = inputs
        .map(field => field.id)
        .join(',');

    const modal = new Modal()
        .setCustomId(`${modalId}:${fieldIds}`)
        .setTitle(title);

    for (const field of inputs) {
        const input = new TextInputComponent()
            .setCustomId(field.id)
            .setLabel(field.label)
            .setStyle(field.style || 'SHORT')
            .setPlaceholder(
                field.placeholder || 'Digite algo...'
            )
            .setRequired(
                field.required ?? true
            )
            .setMinLength(
                field.minLength ?? 1
            )
            .setMaxLength(
                field.maxLength ?? 50
            );

        if (field.value) {
            input.setValue(field.value);
        };

        modal.addComponents(
            new MessageActionRow()
                .addComponents(input)
        );
    };

    return modal;
};