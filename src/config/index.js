require('dotenv').config();

module.exports = {
    // bot core
    token: process.env.TOKEN,
    prefix: 'k.',

    // environment
    isDev: process.env.NODE_ENV === 'development',

    // database
    database: {
        usersPath: './users.json'
    },

    // discord settings
    discord: {
        intents: [
            'GUILDS',
            'GUILD_MEMBERS',
            'GUILD_MESSAGES',
            'DIRECT_MESSAGES',
            'MESSAGE_CONTENT'
        ]
    }
};