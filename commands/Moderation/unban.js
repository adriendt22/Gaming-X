const { MessageEmbed } = require ("discord.js");

module.exports.run = async (client, message, args) => {
  const user = await client.users.fetch(args[0]);
  if (!user) return message.reply("L'utilisateur n'existe pas.");
  message.guild.members.unban(user)

  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#35f092")
    .setDescription(`**Action**: Unban`)
    .setTimestamp()
    .setThumbnail(user.avatarURL())
    .setFooter(message.author.username, message.author.avatarURL());

    message.delete(),

    client.channels.cache.get('795410332742189097').send(embed);

};

module.exports.help = {
  name: "unban",
  aliases: ['unban'],
  category: 'moderation',
  description: "unban un utilisateur",
  cooldown: 10,
  usage: '<user_id>',
  isUserAdmin: false,
  permissions: true,
  args: true
};