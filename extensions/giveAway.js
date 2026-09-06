const { GiveawaysManager } = require("discord-giveaways");
const { useHooks } = require("zihooks");
const config = useHooks.get("config");
/**
 * This extension file run at bot started.
 */

module.exports.data = {
	name: "giveaways",
	type: "extension",
	enable: config?.DevConfig?.Giveaway,
};
/**
 *
 * @param {import("discord.js").Client} client
 */
module.exports.execute = async (client) => {
	useHooks.set(
		"giveaways",
		new GiveawaysManager(client, {
			storage: "../jsons/giveaways.json",
			default: { botsCanWin: false, embedColor: "Random", embedColorEnd: "#000000", reaction: "🎉" },
		}),
	);
};
