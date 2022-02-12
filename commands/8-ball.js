const discord = require ("discord.js");
const prefix = require('../config/config.json')
const fetch = require("node-fetch");

module.exports.run = (client, message, args) =>{
    if(args == ""){
        message.channel.send("Please ask a question.")
    } 
    else{
        let uri = "https://8ball.delegator.com/magic/JSON/" + args;
        fetch(uri)
            .then(response => response.json())
            .then(json => {
            message.channel.send(json.magic.answer)
        });
    }
}

module.exports.details = {
    name: '8-Ball',
    author: 'BlackBullGames#6892',
    icon:'https://cdn.discordapp.com/avatars/844310101825290270/6d2fd16b4e6327130ceab8b6c076bd9c',
    description: 'Ask the 8-Ball a question!',
    usage:`${prefix.prefix}8-ball {question}`
}