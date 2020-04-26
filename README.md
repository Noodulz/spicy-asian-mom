# Spicy Asian Mom Bot
![apfp](/src/images/tigermommy.png)<br/>
A Discord bot simulating a traumatizing Asian tiger mom that aggressively tells you you're some kind of disappointment (or not) anytime a user mentions the word "study" or "studying". Developed with Discord.js and Node.js and currently deployed and up and running via by AWS (EC2). 

![demo](/src/images/ezdemoamb.gif)

Note that this was made purely out of a parodical idea and that I mean no offense or seriousness. This is purely a homage to all the Asian kids out there with aggressively strict parents. 

Feel free to make pull requests or submit an issue for any other phrases you'd like to be put into Spicy Asian Mom Bot! I'll gladly take more into consideration ;)

## Bot Hosting Instructions
In order to host, you will need dependencies npm, node.js, as well as an Amazon AWS account to host an EC2 instance (the bot in this case). Ideally you should be running a Linux environment or WLS on Windows is also fine. 

1. Generate a bot token at [Discord's Developer Portal](https://discordapp.com/developers) and write it down somewhere for later steps
2. Create a free Amazon AWS account
3. Head to EC2 and follow instructions to create an Ubuntu instance where the bot will be hosted
4. Download the key pair given after creating an instance and save it somewhere not-so-public on your filesystem.
5. Click launch instances to start the shell to host the bot.
6. Go to where your key file (.pem) is, and set permissions on it by running `chmod 400 keyfile.pem` (note if this doesn't work, try chmod 600)
7. Login into your bot instance with the following command
```
$ ssh -i "yourkeyfile.pem" ubuntu@00.00.000.000 # Replace 00.00.000.000 with the IP given to you listed in the EC2 instance info
```
8. Once logged in, install run `sudo apt-get update` and then `sudo apt-get install nodejs npm`
9. Run `git clone https://github.com/Noodulz/spicy-asian-mom-discordbot.git` to clone the source code.
10. Edit the bot.js file with a text editor and insert the bot token generated in the first step into the bottom of the src code.
11. Exit out and run `npm install discordjs forever` to get the dependencies to run the discord.js bot as well as forever to keep the bot running while out of the instance
12. Run `forever start bot.js` and exit out of the shell, and your bot should be up!


## Invite Link
http://tiny.cc/t5wwiz
