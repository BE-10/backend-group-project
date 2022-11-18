const { users, Profile } = require("../models");
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
		const data = await user.findAll({
			offset,
			limit,
		});

		const payload = {
			status: 200,
			message: `${limit} datas, offset ${offset}`,
			data,
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
		const data = await user.findOne({
			where: {
				id,
			},
		});

		const payload = {
			status: 200,
			message: `user id: ${id}`,
			data,
		};

		res.status(200).send(payload);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};
/* get user by id */

const handlUpdateProfile = async (req, res) => {
	/* request body
	 * {
	 * 	 ...
	 * 	 data: {
	 * 				profile: {
	 * 				nama:"lakj",
	 * 				kontak:"asldk;jf",
	 * 				alamat:"asdklf;",
	 * 				},
	 * 				users: {
	 * 				email: "slajd@gmail.com",
	 * 				password: "lasdjkfasdf",
	 * 				}
	 * 			}
	 *   }
	 * }
	 */

	const { id } = req.params;
	const body = req.body;
	// id_user: DataTypes.INTEGER,
	// nama: DataTypes.STRING,
	// kontak: DataTypes.STRING,
	// alamat: DataTypes.STRING
	try {
		Object.keys(body.data.users).forEach(async (element) => {
			await users.update(
				{
					element: body.data[`${element}`],
				},
				{
					where: {
						id,
					},
				}
			);
		});

		Object.keys(body.data.Profile).forEach(async (element) => {
			await Profile.update(
				{
					element: body.data[`${element}`],
				},
				{
					where: {
						id_user: id,
					},
				}
			);
		});

		const payload = {
			status: 202,
			message: "data successfully updated",
			data: null,
		};
		res.status(201).send(payload);
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
	handleRegister,
	handleLogin,
	getAllUsers,
	getUserById,
	handlUpdateProfile,
};
