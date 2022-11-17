const db = require("../models");

const job = db.Job;

module.exports = {
	getAllJobs: async (req, res) => {
		/*
		 *{
		 *  token: "token",
		 *  uuid: middleware-token-payload
		 *}
		 */
		const { id, limit } = req.params;

		const payload = await job.findAll({
			where: {
				available: true,
				limit,
				id: {
					[Op.gt]: id,
				},
			},
		});

		res.status(200).res(payload);
	},
	getJobById: async (req, res) => {
		/*
		 *{
		 *  token: "token",
		 *  uuid: middleware-token-payload,
		 *}
		 */
		const { id } = req.params;

		const payload = await job.findAll({
			where: {
				id,
			},
		});

		res.send(200).send(payload);
	},
};
