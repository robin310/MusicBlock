const discord = require ("discord.js");
const prefix = require('../config/config.json')

module.exports.run = (client, message, args) =>{
    function flip(){
        var rand = ['Heads!', 'Tails!'];
        return rand[Math.floor(Math.random()*rand.length)];
    }
    message.channel.send(flip())
}

module.exports.details = {
    name:'Coin Flip',
    author: 'BlackBullGames#6892',
    icon:'https://cdn.discordapp.com/avatars/844310101825290270/6d2fd16b4e6327130ceab8b6c076bd9c',
    description:'Simple coin flip command',
    usage:`${prefix.prefix}coin`
}