const Discord = require('discord.js');
const bot = new Discord.Client();
// to connect to the bot shh is secret man
const token = 'NTE1MjY1MTA4MTYzOTUyNjQ3.XOrA8A.AjuJDZUTlLXGHZfDew7ze_-nigU';

// prefix to call toxicBot
const prefix = '!';

// online message to terminal
bot.on('ready', () => {
    console.log('This bot is online stupid!');
})

var i;

// message processing for toxicity
bot.on('message', msg => {
    
    let args = msg.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'toxic':
            for ( i = 0; i < 10; i++){
                msg.channel.send(args[1] + ' ur bad');
            }
            break;
    }
})
bot.login(token);