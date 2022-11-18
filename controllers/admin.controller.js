const { users, Profile, sequelize } = require("../models");
const date = "GETDATE()";

const handleGetAdminById = async (req, res) => {
	const { id } = req.params;

	const data = await sequelize.query(
		`select u.id, p.nama, u.email, p.kontak, p.alamat from users u left join profiles p on u.id = p.id_user where u.id = ${id}`
	);

	res.send(data[0]);
};

module.exports = {
	handleGetAdminById,
};
