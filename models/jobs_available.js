'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobs_available extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jobs_available.init({
    company_id: DataTypes.INTEGER,
    job_id: DataTypes.INTEGER,
    salary: DataTypes.STRING,
    image_path: DataTypes.TEXT,
    title: DataTypes.STRING,
    title_desc: DataTypes.TEXT,
    content_title: DataTypes.STRING,
    content_desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'jobs_available',
  });
  return jobs_available;
};