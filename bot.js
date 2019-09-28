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

// counter variable
var i;

// message processing for toxicity
bot.on('message', msg => {
    // holds message content for testing
    // var sup = message.content;
    // prints message content for testing
    // console.log(sup)
    // array holding the split message for processing
    let args = msg.content.substring(prefix.length).split(" ");
    //to catch the username and get message
    if (args[1] != null){
        // variable to hold username length to properly save the rest of the message
        var len = args[1].length;
        // holds the rest of the message
        let stuff = msg.content.substring(7 + len);
        // holds the user being @'d user name
        var name = args[1];
        // switch for more functionality
        switch(args[0]){
            case 'toxic':
                // checks for ultra toxic
                if (args[1] == '!toxic' || args[1] == 'toxic'){
                    msg.channel.send("nice try shitter " + msg.author);
                    break;
                }
                // prints the sent message 10 times
                for ( i = 0; i < 10; i++){
                    msg.channel.send(args[1] + ' ' + stuff);
                }
                args.length = 0;
                break;
            case 'flush':
                var member = msg.mentions.members.first();
                // ban
                member.kick().then((member) => {
                    // Successmessage
                    msg.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: ");
                }).catch(() => {
                        // Failmessage
                    msg.channel.send("Access Denied");
                });
                break; 
        }
    }
})

bot.login(token);