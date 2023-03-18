// connection shiz
const Discord = require('discord.js');
const bot = new Discord.Client();
// to connect to the bot shh is secret man
const token = 'NTE1MjY1MTA4MTYzOTUyNjQ3.W_cUBg.5O3Rrr56usa6eXACn1lRf25JFU4';

// prefix to call toxicBot
const prefix = '!';

// online message to terminal
bot.on('ready', () => {
    console.log('This bot is online stupid!');

    // set activity
    bot.user.setActivity("with my junk", {type: "PLAYING"})
    console.log('Activity set');
})

// counter variable
var i;

// message processing for toxicity
bot.on('message', msg => {


    // array holding the split message for processing
    let args = msg.content.split(" ");

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
            case prefix + 'toxic':
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
            case prefix + 'flush':
                var member = msg.mentions.members.first();
                // ban
                member.kick().then((member) => {
                    // Successmessage
                    msg.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: ");
                    //member.send("Sorry! Here's a link back: " + msg.channel.createInvite(
                        //{
                        //      maxAge: 10 * 60 * 1000, // maximum time for the invite, in milliseconds
                        //      maxUses: 1 // maximum times it can be used
                        //}));

                }).catch(() => {
                        // Failmessage
                    msg.channel.send("Access Denied");
                });
                break;
           case prefix + 'hello':
                var member = msg.mentions.members.first();
                if (msg.author != "toxicBot"){
                for ( i = 0; i < 10; i++){
                  member.send(stuff).catch(() => {
                        // Failmessage
                    msg.channel.send("Got blocked :cry:");
                });}
                }
                break;
          case prefix + 'fuPaul':
                msg.channel.bulkDelete(args[1]).then(() => {
                        msg.channel.send("Deleted " + args[1] + " messages.").then(msg => msg.delete(3000));
                        });
                break;
          case prefix + 'swarm':
                msg.channel.send("!join");
                msg.channel.send("!play " + args[1]);
                break;
          case prefix + 'l8rsk8r':
                var member = msg.mentions.members.first();
                member.setVoiceChannel(null);
                break;
         case prefix + 'wakey':
                 // make sure it isn't a toxic bot sent message
                if ((msg.author.bot)){
                        msg.channel.send("Nice try shitter :sadgamer: " + msg.author.displayName);
                }else{
                        var member = msg.mentions.members.first();
                        const listedChannels = [];
                        msg.guild.channels.forEach(channel => {
                        if(channel.permissionsFor(msg.author).has('VIEW_CHANNEL')){
                        if (channel.type == "voice") {
                                setTimeout(() => {member.setVoiceChannel(channel.id);},2000);
                                console.log(channel.id + " " + channel.type);
                        } // end channel type check
                } // end view condition
        }); // end channel loop
        } // end toxic check
        break;
        } // end select-case
    } else if (args[0] == prefix + "toxicHelp"){
                msg.channel.send("!_toxic + @user + message -> @'s the user 10 times with your message");
                msg.channel.send("!_flush + @user -> Try's to kick the user");
                msg.channel.send("!_hello + @user + message -> dm's the user :tongue: :tongue: :tongue:");
                msg.channel.send("!_fuPaul + Number between 2-100 -> deletes that many messages from channel");
                msg.channel.send("!_wakey + @user -> wakes em from the dead if you know what I mean :wink:");
                msg.channel.send("!_l8rsk8r + @user -> disconnects from voice");
                msg.channel.send("!_toxicHelp -> helps u fucks");
                msg.channel.send("remove underscores nerds :thinking:");
    }

})