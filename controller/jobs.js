const db = require("../models");

const job = db.Job;

module.exports = {
	getAllJobs: async (req, res) => {
		/*
		 *{
		 *  token: "token",
		 *  uuid: middleware-token-payload,
		 *  data: {
		 *    startId: "20",
		 *    limit: "20"
		 *  }
		 *}
		 */
		const reqData = req.body.data;
		const limit = reqData.limit;
		const startId = reqData.startId;

		const payload = await job.findAll({
			where: {
				available: true,
				limit,
				id: {
					[Op.gt]: startId,
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
		 *  data: {
		 *    id: 20
		 *  }
		 *}
		 */
		const reqData = req.body.data;
		const id = reqData.id;

		const payload = await job.findAll({
			where: {
				id,
			},
		});

		res.send(200).send(payload);
	},
};
