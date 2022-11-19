const { users, Profile, sequelize } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT } = require("../helpers/jwtSecurity");

const SALT_ROUND = 10;

/* -------- Register -------- */

const handleRegister = async (req, res) => {
	try {
		const { email, password, role } = req.body;

		const getUserByEmail = await users.findOne({
			where: { email },
		});

		if (getUserByEmail) {
			res.status(404).send({
				status: false,
				message: "Email sudah digunakan!",
				data: null,
			});
		} else {
			const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

			const registeredUser = await users.create({
				email,
				password: hashedPassword,
				role,
			});

			res.status(201).send({
				status: true,
				message: "User berhasil membuat akun!",
				data: registeredUser,
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

/* -------- End Register -------- */

/* -------- Login -------- */

const handleLogin = async (req, res) => {
	const { email, password } = req.body;

	const getUserByEmail = await users.findOne({
		where: { email },
	});

	if (!getUserByEmail) {
		res.status(404).send({
			status: false,
			message: "Email belum terdaftar!",
			data: null,
		});
	} else {
		const isPasswordMatch = await bcrypt.compare(
			password,
			getUserByEmail.password
		);

		if (isPasswordMatch) {
			const token = jwt.sign(
				{
					id: getUserByEmail.id,
					email: getUserByEmail.email,
				},
				JWT.SECRET,
				{
					expiresIn: JWT.EXPIRED,
				}
			);

			res.status(201).send({
				status: true,
				message: "User berhasil login!",
				data: token,
			});
		}
	}
};
/* -------- End Login -------- */

/* get all users */
const getAllUsers = async (req, res) => {
	/*
	 * params = /:offset/:limit
	 * {
	 *   token: "token",
	 *   uuid: middleware-token-payload
	 * }
	 */

	let { offset, limit } = req.params;
	offset = parseInt(offset);
	limit = parseInt(limit);

	try {
		const data = await sequelize.query(
			`select u.id, u.email, p.nama, p.kontak, p.alamat from users u left join profiles p on u.id = p.id_user limit ${limit} offset ${offset}`
		);
		// await users.findAll({
		// 	offset,
		// 	limit,
		// });

		const payload = {
			status: 200,
			message: `${limit} datas, offset ${offset}`,
			data: data[0],
		};

		res.status(200).send(payload);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

/* get all users end */

/* get user by id */
const getUserById = async (req, res) => {
	/*
	 * params = /:id/
	 * {
	 *   token: "token",
	 *   uuid: middleware-token-payload,
	 * }
	 */

	const { id } = req.params;
	try {
		const data = await sequelize.query(
			`select u.id, u.email, p.nama, p.kontak, p.alamat from users u left join profiles p on u.id = p.id_user where u.id = ${id}`
		);
		// await user.findOne({
		// 	where: {
		// 		id,
		// 	},
		// });

		const payload = {
			status: 200,
			message: `user id: ${id}`,
			data: data[0],
		};

		res.status(200).send(payload);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};
/* get user by id */

/* update profile and users */
const handlUpdateProfile = async (req, res) => {
	/* request body
	 * {
	 * 	 ...
	 * 	 data: {
	 * 		  profile: {
	 * 		  	 nama:"lakj",
	 * 		  	 kontak:"asldk;jf",
	 * 		  	 alamat:"asdklf;",
	 * 		  },
	 * 		  users: {
	 * 		  	 email: "slajd@gmail.com",
	 * 		  	 password: "lasdjkfasdf",
	 * 		  }
	 * 		}
	 * }
	 */

	const { id } = req.params;
	const body = req.body;
	try {
		const dataUsers = await users.update(
			{
				email: body.data.users.email,
				password: body.data.users.password,
			},
			{
				where: {
					id,
				},
			}
		);

		const dataProfiles = await Profile.update(
			{
				nama: body.data.profile.nama,
				kontak: body.data.profile.kontak,
				alamat: body.data.profile.alamat,
			},
			{
				where: {
					id,
				},
			}
		);

		const payload = {
			status: 202,
			message: "data successfully updated",
			data: null,
		};
		res.status(202).send(payload);
	} catch (err) {
		const payload = {
			status: 500,
			message: "something went wrong",
			data: err,
		};
		res.status(500).send(payload);
	}
};
/* update profile and users */

module.exports = {
	handleRegister,
	handleLogin,
	getAllUsers,
	getUserById,
	handlUpdateProfile,
};
