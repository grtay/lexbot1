const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const öneri = args.slice(0).join(' ')
    var guildID = "432144666025000970";
    var channelID = "472600393311059978";

    if (!öneri) {
        return message.reply("Lütfen bir öneri belirtin **Doğru Kullanım**: -öneri <öneri>");
    } else {
        const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .addField('Eylem:', 'Öneri')
        .addField('Kullanıcı:', message.author.id)
        .addField('TAG:', message.author.tag)
        .addField('Önerisi:', öneri);
    
        client.guilds.get(guildID).channels.get(channelID).send(embed)
        message.channel.send('Öneriniz alınmıştır, teşekkürler!');
    }


};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: 'Önerilerinizi botun kurucularına atar',
  usage: 'öneri'
};
