const db = require("../models");

const user = db.User;

module.exports = {
	getAllUsers: async (req, res) => {
		/*
		 * params = /:id/:limit
		 * {
		 *   token: "token",
		 *   uuid: middleware-token-payload
		 * }
		 */

		let { offset, limit } = req.params;
		offset = parseInt(offset);
		limit = parseInt(limit);
		try {
			const payload = await user.findAll({
				offset,
				limit,
			});

			res.status(200).send(payload);
		} catch (error) {
			console.log(error);
			res.status(500).send(error);
		}
	},
	getUserById: async (req, res) => {
		/*
		 * params = /:id/
		 * {
		 *   token: "token",
		 *   uuid: middleware-token-payload,
		 * }
		 */

		const { id } = req.params;
		try {
			const payload = await user.findOne({
				where: {
					id,
				},
			});

			res.status(200).send(payload);
		} catch (error) {
			console.log(error);
			res.status(500).send(error);
		}
	},
};
