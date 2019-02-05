const Discord = require('Discord.js');
const client = new Discord.Client();

const prefix = '!';




client.on('message', message => {
	if(message.content.toLowerCase() === '<@542257407473221633>') { if(message.author.bot) { return; }
	         var embed = new Discord.RichEmbed()
			 .addField('hello!', ' why are you not in the forest?:thinking: ')
			 .setColor('GREEN')
			message.channel.sendEmbed(embed);
	}
});



client.on('guildMemberAdd', member => {
		const channel = member.guild.channels.find(ch => ch.name === 'welcome');
        if (!channel) return;
		channel.send(`${member} welcome to jojos Forest discord server:grinning: a Admin will give you permissions for the channels soon, pls wait a bit:wink: `);
});






	
	
	
	
	
	
	
// THIS  MUST  BE  THIS  WAY





client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
