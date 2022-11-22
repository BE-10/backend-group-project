module.exports = {
	development: {
		username: "root",
		password: "admin",
		database: "backend_group_project",
		host: "127.0.0.1",
		dialect: "mysql",
	},
	test: {
		username: "root",
		password: null,
		database: "backend_group_project",
		host: "127.0.0.1",
		dialect: "mysql",
	},
	production: {
		username: "root",
		password: process.env.DB_PASSWORD,
		database: "railway",
		host: "containers-us-west-136.railway.app",
		port: process.env.PORT,
		dialect: "mysql",
	},
};
