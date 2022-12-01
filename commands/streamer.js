const { fetch } = require('node-fetch');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('streamer')
		.setDescription('Returns a random streamer from database.'),
	async execute(interaction) {
		const streamerResult = await fetch('http://localhost:3000/streamers/')
			.then(response => response.json());
		const [answer] = streamerResult.results;
		const embed = new SlashCommandBuilder.RichEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.name);
		await interaction.reply(embed);
	},
};