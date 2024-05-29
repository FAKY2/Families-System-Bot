const Discord = require('discord.js');
const Schema = require("../../database/models/economy");
const Schema2 = require("../../database/models/economyTimeout");

module.exports = async (client, interaction, args) => {
    let user = interaction.user;
    let timeout = 86400000; // 24 hours in milliseconds

    // Generate a random amount between 2000 and 4000
    let amount = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;

    Schema2.findOne({ Guild: interaction.guild.id, User: user.id }, async (err, dataTime) => {
        if (dataTime && dataTime.Daily !== null && timeout - (Date.now() - dataTime.Daily) > 0) {
            let time = (dataTime.Daily / 1000 + timeout / 1000).toFixed(0);
            return client.errWait({
                time: time,
                type: 'editreply'
            }, interaction);
        } else {
            client.succNormal({
                text: `You've collected your daily reward!`,
                fields: [
                    {
                        name: `${client.emotes.economy.coins}┆Amount`,
                        value: `$${amount}`,
                        inline: true
                    }
                ],
                type: 'editreply'
            }, interaction);

            if (dataTime) {
                dataTime.Daily = Date.now();
                dataTime.save();
            } else {
                new Schema2({
                    Guild: interaction.guild.id,
                    User: user.id,
                    Daily: Date.now()
                }).save();
            }

            client.addMoney(interaction, user, amount);
        }
    })
}
