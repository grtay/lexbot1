const Discord = require('discord.js');
var fortunes = [
  ":hammer: geri tepti",
  "sende birine :hammer: atmayı dene",
  ":hammer: kafanı kırdı",
  ":hammer: kırıldı"
];
exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Çekiç Atcağımı Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana :hammer: Attı. '  + fortunes[Math.floor(Math.random() * fortunes.length)] +  '**' )
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiç',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'çekiç <kişi>'
};
