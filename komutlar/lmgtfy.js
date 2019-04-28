const Discord = require('discord.js');
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toLowerCase() : c.toLowerCase()).join('');
exports.run = (bot, msg, args) => {
	if (args.length < 1) { 
		return msg.reply('Aramam için bir mesaj belirt');
	} else {
		const embed = new Discord.RichEmbed()
		.setColor(0x00AE86)
		.setDescription(`**Wow!** :arrow_right: http://www.lmgtfy.com/?q=` + args.map(randomizeCase).join('%20'))
		msg.channel.send(embed);
	}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'lmgtfy',
  description: 'Mesajınızı lmgtfy haline getirir.',
  usage: 'lmgtfy <kelime>'
};