const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("STEAM:https://steamcommunity.com/id/GoktayO    STEAM:https://steamcommunity.com/id/GoktayO2");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['K'],
  permLevel: 0
};

exports.help = {
  name: 'Kurucu',
  description: 'Botun Kurucusunun Steam Hesaplarını Gösterir',
  usage: 'Kurucu'
};
