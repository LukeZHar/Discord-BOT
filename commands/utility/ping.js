const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with What you want!!'),
	async execute(interaction) {
		await interaction.reply('What you want!!');
	},
};