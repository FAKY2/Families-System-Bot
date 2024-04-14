const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `FAKY`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `<@611408493274071060>`,
            inline: true,
        },
        {
            name: "🌐┆FAKY's Music Bot",
            value: `[Invite](https://discord.com/oauth2/authorize?client_id=1213700667374571620&permissions=277028617296&scope=bot)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
