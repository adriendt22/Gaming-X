module.exports = (client, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '795410332742189097'); 
  const rlRole = message.guild.roles.cache.get("795410332302442525");
  const r6sRole = message.guild.roles.cache.get("795410332302442524");
  const valorantRole = message.guild.roles.cache.get("795410332272164903");
  const csgoRole = message.guild.roles.cache.get("795410332302442526");
  const amongusRole = message.guild.roles.cache.get("795410332272164902");
  if (member.user.bot) return;

  if (["emoji_1", "emoji_2", "emoji_3", "emoji_4", "emoji_5"].includes(emoji) && message.channel.id === channel.id) {
  switch (emoji) {
    case "emoji_1":
      member.roles.add(rlRole);
      client.channels.cache.get('795410332742189097').send(`Le rôle ${rlRole.name} a été ajouté avec succès à ${user}!`);
      break;

      case "emoji_2":
      member.roles.add(r6sRole);
      client.channels.cache.get('795410332742189097').send(`Le rôle ${r6sRole.name} a été ajouté avec succès à ${user}!`);
      break;

      case "emoji_3":
      member.roles.add(valorantRole);
      client.channels.cache.get('795410332742189097').send(`Le rôle ${valorantRole.name} a été ajouté avec succès à ${user}!`);
      break;

      case "emoji_4":
      member.roles.add(csgoRole);
      client.channels.cache.get('795410332742189097').send(`Le rôle ${csgoRole.name} a été ajouté avec succès à ${user}!`);
      break;

      case "emoji_5":
      member.roles.add(amongusRole);
      client.channels.cache.get('795410332742189097').send(`Le rôle ${amongusRole.name} a été ajouté avec succès à ${user}!`);
      break;

    }
  }
}