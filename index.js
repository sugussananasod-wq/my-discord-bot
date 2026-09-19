const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`บอท ${client.user.tag} ออนไลน์เรียบร้อยแล้ว!`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('Pong! บอททำงานปกติแล้วจ้า');
    }
});

client.login(process.env.DISCORD_TOKEN);
