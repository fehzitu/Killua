// import custom functions
const activities = require('../../config/activities');
const constants = require('../../config/constants');
const log = require('../../utils/logger');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        let index = 0;

        const updateStatus = () => {
            client.user.setActivity(activities[index], {
                type: 'PLAYING'
            });

            index = (index + 1) % activities.length;
        };

        // initial status
        updateStatus();

        // interval
        const interval = setInterval(updateStatus, 5000);

        client.user.setStatus('online');

        log('SUCCESS', `${client.user.tag} logado com sucesso!`);

        // save ref (future use)
        client.statusInterval = interval;
    }
};