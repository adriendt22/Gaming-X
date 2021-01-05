module.exports = client => {
  console.log(`Connecté à ${client.user.tag}!`);

  client.user.setPresence({
    activity:{
      name: 'Gaming-X BOT',
      type: 'WATCHING'
    },
    status: 'dnd'
  });
}