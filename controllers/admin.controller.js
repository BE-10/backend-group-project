const { users, Profile, sequelize } = require("../models");

const handleGetAdminById = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await sequelize.query(
			`select u.id, p.nama, u.email, p.kontak, p.alamat from users u left join profiles p on u.id = p.id_user where u.id = ${id}`
		);

		const payload = {
			status: 200,
			message: "GET sucessful",
			data: data[0],
		};

		res.status(200).send(payload);
	} catch (err) {
		const payload = {
			status: 500,
			message: "something went wrong",
			data: err,
		};
		res.status(500).send(payload);
	}
};

module.exports = {
	handleGetAdminById,
};
