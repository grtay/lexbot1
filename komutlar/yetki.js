const Discord = require('discord.js');

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'yetki',
  description: 'giriş-çıkış Odası Açıp Üye + Oyunlar Yetkileri Açarsanız Sunucuya Giren Kişiye Bu Yetkileri Verir',
  usage: 'yetki'
};
