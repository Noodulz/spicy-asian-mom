const Discord = require('discord.js');
const client = new Discord.Client();
const term = "study";
const anotherTerm = "STUDY";
const yetAnotherTerm = "Study";
const anotherAnotherTerm = "studying";
const buildUponAnotherStudy = "Studying";
var listOfAnswers = ['Yucky daughter', 'GO STUDY RIGHT NOW U UNGRATEFUL DAUGHTER', 'YOU DISAPPOINTMENT', 'WHY U BORN SO DUMB', 'YOU DISAPPOINT YOUR FAMILY', 'GO DO HOMEWORK! NOW!!!', 'YOUR COUSIN IS DOCTOR ALREADY!!', 'Stop think about girls and think about FUTURE!', 'DISGRACEFUL. GO STUDY', 'YOU DISHONOR ME BY NOT STUDYING!', 'Still no study? GO GET THE RICE PADDLE', 'NO RICE FO YU', 'NO WORK?? NO BOBA MONEY', 'GO TO THE CORNER AND KNEEL', 'NO FRY RICE FOR YOU', 'WHY U NO STUDY AND GET MARRY YET??', 'YOU GET CANCER IF YOU NO STUDY', 'A-SIAN, NOT B-SIAN', 'You forget to study? I forget to feed you.', 'You get below C, I PUT YOU BELOW SEA', 'WHY U GET F IN GENDER HUH????', 'Be sure to drink lots of water before you study, hun',
    'Here, have some fruits and go study', 'Thank goodness there\'s ONE smart child in this family *glares at other siblings*', 'Good luck!', 'You are favorite child', 'I\'m not ashamed to be your mother', 'You so smart', 'U 1 in billion, now study and get me 1 billion money', 'You have brought your family honor!', 'I believe you can become doctor', 'You did good job... today', 'Well well! You aren\'t always a total disappointment', 'I believe you can become doctor'
];
client.on("message", (receivedMessage) => {
    // Prevent bot from responding to its own receivedMessages
    console.log("It works!!");
    if (receivedMessage.author == client.user) {
        return;
        if (message.author.bot) {
            return;
        }
    }
    if (!receivedMessage.content[0] == " " && !receivedMessage.content[1] == "") {
        if ((receivedMessage.content.includes(term) || receivedMessage.content.includes(anotherTerm) || receivedMessage.content.includes(yetAnotherTerm))) {
            var randomNum = Math.floor((Math.random((listOfAnswers.length + 1)) * listOfAnswers.length));
            var getAnAnswer = listOfAnswers[randomNum];
            var asianResponse = String.toString(getAnAnswer);
            receivedMessage.channel.send(getAnAnswer);
        }
    }

})

bot_token = '';
client.login(bot_token);
