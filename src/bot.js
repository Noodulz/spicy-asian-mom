// Imports Discord API
const Discord = require('discord.js');
const client = new Discord.Client();

// Terms to identify, though not sure if this is case-sensitive. Will have to try out later 
const term = "study";
const anotherTerm = "STUDY";
const yetAnotherTerm = "Study";
const anotherAnotherTerm = "studying";
const buildUponAnotherStudy = "Studying";

// Array of random messages mom bot sends. This is not the entire list of phrases she will send, but a rough idea
var listOfAnswers = ['Yucky daughter', 'GO STUDY RIGHT NOW U UNGRATEFUL DAUGHTER', 'YOU DISAPPOINTMENT', 'WHY U BORN SO DUMB', 'YOU DISAPPOINT YOUR FAMILY', 'GO DO HOMEWORK! NOW!!!', 'YOUR COUSIN IS DOCTOR ALREADY!!', 'Stop think about girls and think about FUTURE!', 'DISGRACEFUL. GO STUDY', 'YOU DISHONOR ME BY NOT STUDYING!', 'Still no study? GO GET THE RICE PADDLE', 'NO RICE FO YU', 'NO WORK?? NO BOBA MONEY', 'GO TO THE CORNER AND KNEEL', 'NO FRY RICE FOR YOU', 'WHY U NO STUDY AND GET MARRY YET??', 'YOU GET CANCER IF YOU NO STUDY', 'A-SIAN, NOT B-SIAN', 'You forget to study? I forget to feed you.', 'You get below C, I PUT YOU BELOW SEA', 'WHY U GET F IN GENDER HUH????', 'U 1 in billion, now study and get me 1 billion money', 'YOU DISAPPOINT YOUR FAMILY', 'GO DO HOMEWORK NOW!!!',
                     'You are utter disaPPOINTMENT!!!!!', 'WHY YOU EMBARRASS ME IN FRONT OF CUTE FRIEND. STUDY HARDER', 'You want to be comedian? Go fucking study, who told you you were punny???','I didn\'t raise a bottom now, did I', 'Lazy gay child', 'You cheap just like your grades. Now study'  
];

// Turns on bot to detect received messages in server. receivedMessage as an alias for "message"
client.on("message", (receivedMessage) => {
    // Sends a confirmation message to terminal confirming that bot does indeed work
    console.log("It works!!");
    // Prevents bot from responding to itself, like anti-recursion kind of
    if (receivedMessage.author == client.user) {
        return;
        if (message.author.bot) {
            return;
        }
    }
    // Might've been to bypass the promises error. Checks to see if the message is blank or not in the first few chars
    if (!receivedMessage.content[0] == " " && !receivedMessage.content[1] == "") {
        // Checks the user's message for any of the terms mentioned above related to studying. Also added feature to trigger bot when bot is tagged as well
        if ((receivedMessage.content.includes(term) || receivedMessage.content.includes(anotherTerm) || receivedMessage.content.includes(yetAnotherTerm) || receivedMessage.content.includes(client.user.id))) {
            // Gets a random number to call from the array of messages to send
            var randomNum = Math.floor((Math.random((listOfAnswers.length + 1)) * listOfAnswers.length));
            var getAnAnswer = listOfAnswers[randomNum];
            // Converts array object to a string that's to be sent
            var asianResponse = String.toString(getAnAnswer);
            // Finally parses and sends the message back
            receivedMessage.channel.send(getAnAnswer);
        }
    }

})

// Token hidden for privacy. Get your own token pls
bot_token = ''; 
// Logs into Discord API with token and activates this bot
client.login(bot_token);
