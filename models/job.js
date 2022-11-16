"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Job extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Job.init(
		{
			id_perusahaan: DataTypes.INTEGER,
			gaji: DataTypes.INTEGER,
			image_path: DataTypes.STRING,
			nama: DataTypes.STRING,
			nama_deskripsi: DataTypes.TEXT,
			konten_judul: DataTypes.STRING,
			konten_deskripsi: DataTypes.TEXT,
			available: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Job",
		}
	);
	return Job;
};
