const discord = require ("discord.js");
const prefix = require('../config/config.json')

module.exports.run = (client, message, args) =>{
    message.channel.send ('pong!')
}

module.exports.details = {
    name: 'Ping',
    author: 'BlackBullGames#6892',
    icon:'https://cdn.discordapp.com/avatars/844310101825290270/6d2fd16b4e6327130ceab8b6c076bd9c',
    description: 'Ping / Pong!',
    usage:`${prefix.prefix}ping`
}