exports.run= (Bastion, message, args) => {
  if (args.length < 1) return message.reply("**Doğru Kullanım**: -leet <mesaj>")



  args = args.join(' ');
  args = args.replace(/a/ig, '4');
  args = args.replace(/e/ig, '3');
  args = args.replace(/l/ig, '1');
  args = args.replace(/o/ig, '0');
  args = args.replace(/s/ig, '5');
  args = args.replace(/t/ig, '7');

  message.channel.send({
    embed: {
      color: 0x00AE86,
      title: 'Leet hali',
      description: args
    }
  }).catch(e => {
    console.log(e);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'leet',
  description: "Mesajınızı leet haline getirir.",
  usage: 'leet <mesaj>'
};