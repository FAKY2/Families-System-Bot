const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.StringSelectMenuBuilder()
                .setCustomId('Bot-linkspanel')
                .setPlaceholder('❌┆Nothing selected')
                .addOptions([
                    {
                        label: `Support server`,
                        description: `Join the suppport server`,
                        emoji: "❓",
                        value: "support-linkspanel",
                    },
                    {
                        label: `Invite Bot`,
                        description: `Invite Bot to your server`,
                        emoji: "📨",
                        value: "invite-linkspanel",
                    },
                ]),
        );

    client.embed({
        title: `🔗・Links`,
        desc: `Get access to Faky's Music Bot , Best Music Quality`,
        image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 
