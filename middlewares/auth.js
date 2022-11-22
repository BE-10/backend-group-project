const jwt = require("jsonwebtoken");
const { users } = require("../models");

const authenticate = async (req, res, next) => {
	const authHeader = req.get("Authorization");

	let token = "";

	if (authHeader && authHeader.startsWith("Bearer"))
		token = authHeader.split(" ")[1];
	else
		return res.status(401).send({
			status: false,
			message: "Anda harus login untuk mengakses resource ini.",
			data: null,
		});

	try {
		const { email } = jwt.verify(token, process.env.SECRET_KEY);

		const getUserByEmail = await users.findOne({
			where: { email },
		});

		req.user = getUserByEmail;

		next();
	} catch (err) {
		return res.status(401).send({
			status: false,
			message: "Sesi telah kadaluarsa. Silakan login kembali",
			data: null,
		});
	}
};

const isAdmin = async (req, res, next) => {
	const user = req.user;

	if (user.role === "admin") return next();

	return res.status(401).send({
		status: false,
		message: "Akun anda harus admin untuk mengakses resource ini.",
		data: null,
	});
};
module.exports = {
	authenticate,
	isAdmin,
};
