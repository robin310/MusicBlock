const discord = require ("discord.js");
const prefix = require('../config/config.json')
const throwdice = () => ~~(Math.random() * 6) + 1;

module.exports.run = (client, message, args) =>{
    message.channel.send("The Number is "+"``"+throwdice()+"``")
}

module.exports.details = {
    name:'Roll',
    author: 'BlackBullGames#6892',
    icon:'https://cdn.discordapp.com/avatars/844310101825290270/6d2fd16b4e6327130ceab8b6c076bd9c',
    description:' Roles a dice (6-Sided).',
    usage:`${prefix.prefix}roll`
}