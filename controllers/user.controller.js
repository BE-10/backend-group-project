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


/* -------- Create Profile Users -------- */

const handlePostProfileUsers = async (req, res, next) => {

    try {
        
        const id_user = req.user.id

        const { nama, kontak, alamat } = req.body

        const createdProfileUser = await Profile.create({
            id_user,
            nama,
            kontak,
            alamat
        })

        res.status(201).send({
            status: true,
            message: 'Profile user berhasil dibuat',
            data: createdProfileUser
        })

    } catch (error) {
        
        res.status(500).send({
            status: false,
            message: error.message,
            data: null
        })

    }

}


/* -------- End Create Profile Users -------- */

module.exports = {
	handleRegister,
	handleLogin,
	handlePostProfileUsers
};
