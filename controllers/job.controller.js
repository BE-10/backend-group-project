const { jobs } = require("../models");

/* -------- Get Job -------- */

const handleGetJob = async (req, res) => {
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
		const getJobData = await job.findAll({
			offset,
			limit,
			where: {
				available: 1,
			},
		});
		res.status(200).send({
			status: true,
			message: "Pekerjaan berhasil didapatkan!",
			data: getJobData,
		});
	} catch (err) {
		res.status(500).send({
			status: false,
			message: err.message,
			data: null,
		});
	}
};

/* -------- Get Job -------- */

/* -------- Get Job By Id -------- */

const handleGetJobById = async (req, res) => {
	try {
		const { id } = req.params;

		const getJobDataById = await jobs.findOne({
			where: { id },
		});

		if (getJobDataById.id == id) {
			res.status(200).send({
				status: true,
				message: "Pekerjaan berhasil didapatkan!",
				data: getJobDataById,
			});
		}
	} catch (err) {
		res.status(500).send({
			status: false,
			message: err.message,
			data: null,
		});
	}
};

/* -------- Get Job By Id -------- */

/* -------- Create Job -------- */

const handleCreateJob = async (req, res) => {
	try {
		const { job_name } = req.body;

		const createdJob = await jobs.create({ job_name });

		res.status(201).send({
			status: true,
			message: "Pekerjaan berhasil ditambahkan!",
			data: createdJob,
		});
	} catch (err) {
		res.status(500).send({
			status: false,
			message: err.message,
			data: null,
		});
	}
};

/* -------- End Create Job -------- */

/* -------- Update Job -------- */

const handleUpdateJob = async (req, res) => {
	try {
		const { id } = req.params;

		const { job_name } = req.body;

		const getJobDataById = await jobs.findOne({
			where: { id },
		});

		if (getJobDataById.id == id) {
			const updatedJob = await jobs.update(
				{
					job_name,
				},
				{
					where: { id },
				}
			);

			res.status(201).send({
				status: true,
				message: "Pekerjaan berhasil diubah!",
				data: updatedJob,
			});
		}
	} catch (err) {
		res.status(500).send({
			status: false,
			message: err.message,
			data: null,
		});
	}
};

/* -------- End Update Job -------- */

/* -------- Delete Job -------- */

const handleDeleteJob = async (req, res) => {
	try {
		const { id } = req.params;

		const getJobDataById = await jobs.findOne({
			where: { id },
		});

		if (getJobDataById.id == id) {
			const deletedJob = await jobs.destroy({
				where: { id },
			});

			res.status(201).send({
				status: true,
				message: "Pekerjaan berhasil dihapus!",
				data: deletedJob,
			});
		}
	} catch (err) {
		res.status(500).send({
			status: false,
			message: err.message,
			data: null,
		});
	}
};

/* -------- End Delete Job -------- */

module.exports = {
	handleGetJob,
	handleGetJobById,
	handleCreateJob,
	handleUpdateJob,
	handleDeleteJob,
};
