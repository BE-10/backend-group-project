const db = require("../models");
const { Op } = require("sequelize");

const job = db.Job;

module.exports = {
	getAllJobs: async (req, res) => {
		/*
		 * params = /:id/:limit
		 * {
		 *   token: "token",
		 *   uuid: middleware-token-payload
		 * }
		 */
		let { offset, limit } = req.params;
		limit = parseInt(limit);
		offset = parseInt(offset);

		try {
			console.log(req.params);
			const payload = await job.findAll({
				offset,
				limit,
				where: {
					available: 1,
				},
			});

			res.status(200).send(payload);
		} catch (error) {
			res.status(500).send(error);
		}
	},
	getJobById: async (req, res) => {
		/*
		 * params = /:id/
		 * {
		 *   token: "token",
		 *   uuid: middleware-token-payload,
		 * }
		 */
		try {
			const { id } = req.params;

			const payload = await job.findOne({
				where: {
					id,
				},
			});

			res.status(200).send(payload);
		} catch (error) {
			res.status(500).send(error);
		}
	},
};
