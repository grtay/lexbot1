const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const translate = require('@k3rn31p4nic/google-translate-api');

exports.run = async (client, message, args) => {
  try {
    if (args.length < 2) {
      return client.emit('commandUsage', message, this.help);
    }

    let result = await translate(args.slice(1).join(' '), { to: args[0] });

	const embed = new Discord.RichEmbed()
	  .setColor(0x00AE86)
      .setDescription(result.text)
      .setFooter(`Ana Dil:${result.from.language.iso.toUpperCase()}  Çevrilen Dil:${args[0].toUpperCase()}`)
	  
    message.channel.send(embed).catch(e => {
      client.log.err(e);
    });
  }
  catch (e) {
    if (e.stack.includes('not supported')) {

      return client.emit('hata', '', client.i18n.err(message.guild.language, 'hatalı mesaj', 'dil kodu'), message.channel);
    }
    client.log.err(e);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çeviri',
  description: 'Mesajınızı istenen dile çevirir.',
  usage: 'çeviri <dil> <mesaj>'
};