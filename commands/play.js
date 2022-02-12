const prefix = require('../config/config.json')
const fetch = require("node-fetch");
const { Client, Intents } = require('discord.js');
const music = require('@koenie06/discord.js-music');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });

/* This code will run when the client receives a interaction */
module.exports.run = ('interactionCreate', async (interaction) => {
    if(interaction.isCommand) {
        if(interaction.commandName === `${prefix.prefix}play`) {
			console.log("hello")

            /*
             * This function requires 3 options:
             * 1) Interaction. The interaction you got from the 'interactionCreate' event.
             * 2) Channel. The Voice Channel where the music is supposed to be played in.
             * 3) Song. A song name/URL that needs to be played.
            */

           const channel = interaction.member.voice.channel;
           const song = interaction.options.getString('song');
           console.log("hello2")

           music.play({
               interaction: interaction,
               channel: channel,
               song: song
           });
        };
    };
});

/* Log your client in with your token. */
client.login('OTM2OTM0MDMzMjMxODU5NzUy.YfUZ0A.VQckeHxRfHARGgpO5RjW0O0aYVQ');
module.exports.details = {
    name:'Play',
    author: 'BlackBullGames#6892',
    icon:'https://cdn.discordapp.com/avatars/844310101825290270/6d2fd16b4e6327130ceab8b6c076bd9c',
    description:'Plays music',
    usage:`${prefix.prefix}cat`
}