const Discord = require('discord.js-selfbot-v13');
const activities = require('./activities');
const keepAlive = require('./server.js');
const config = require("./config.json");
const client = new Discord.Client({ readyStatus: false, checkUpdate: false });
keepAlive();

let currentIndex = 0;

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - Rich Presence started!`);
    function updateRichPresence() {
        const data = activities[currentIndex];
        const buttons = data.buttons;
        const r = new Discord.RichPresence()
            .setType('WATCHING')
            .setName(data.name)
            .setDetails(data.details)
            .setState(data.state)
            .setAssetsLargeImage(data.setAssetsLargeImage)
            .setAssetsLargeText(data.setAssetsLargeText)
            buttons.forEach(button => {
              r.addButton(button.label, button.url);
          });

        client.user.setActivity(r);
        currentIndex = (currentIndex + 1) % activities.length;
    }
    updateRichPresence();
    setInterval(updateRichPresence, 10000);
    client.user.setPresence({ status: 'dnd' });
});
client.login(config.Token);
