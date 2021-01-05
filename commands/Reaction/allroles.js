const { MessageEmbed } = require ("discord.js");
const { FOOTER, FOOTERI } = require('../../config');

module.exports.run = (client, message, args) => {
  const rlRole = message.guild.roles.cache.get("795410332302442525");
  const r6sRole = message.guild.roles.cache.get("795410332302442524");
  const valorantRole = message.guild.roles.cache.get("795410332272164903");
  const csgoRole = message.guild.roles.cache.get("795410332302442526");
  const amongusRole = message.guild.roles.cache.get("795410332272164902");
  const rlEmoji = message.guild.emojis.cache.get("796099079943749672");
  const r6sEmoji = message.guild.emojis.cache.get("796099107688153169");
  const valorantEmoji = message.guild.emojis.cache.get("796099129787809816");
  const csgoEmoji = message.guild.emojis.cache.get("796099150705983529");
  const amongusEmoji = message.guild.emojis.cache.get("796099363134504971");

  const embed = new MessageEmbed()
    .setTitle("Rôles")
    .setDescription("Cliquer sur une réaction pour y recevoir le rôle")
    .setColor("#dc143c")
    .setFooter(FOOTER, FOOTERI)
    .addField(
    "Les rôles",
    `
    ${rlEmoji} - ${rlRole.toString()}
    ${r6sEmoji} - ${r6sRole}
    ${valorantEmoji} - ${valorantRole}
    ${csgoEmoji} - ${csgoRole}
    ${amongusEmoji} - ${amongusRole}
    `
  );

  client.channels.cache.get('795410332742189103').send(embed).then(async msg => {
    await msg.react(rlEmoji);
    await msg.react(r6sEmoji);
    await msg.react(valorantEmoji);
    await msg.react(csgoEmoji);
    await msg.react(amongusEmoji);
  })

  message.delete();
};

module.exports.help = {
  name: "allroles",
  aliases: ['allroles'],
  category: 'reaction',
  description: "Renvoie un message avec des réactions!",
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: true,
  args: false
};