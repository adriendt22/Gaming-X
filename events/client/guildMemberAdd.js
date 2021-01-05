const { MessageEmbed } = require("discord.js");
const { FOOTER, FOOTERI } = require('../../config');

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL())
    .setColor("#35f092")
    .setDescription(`Bienvenue ${member.user}`)
    .setTimestamp()
    .setFooter(FOOTER, FOOTERI);

  client.channels.cache.get('795410332742189099').send(embed);
}