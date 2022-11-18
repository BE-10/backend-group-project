'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jobs.init({
    company_id: DataTypes.INTEGER,
    salary: DataTypes.STRING,
    image_path: DataTypes.TEXT,
    title: DataTypes.STRING,
    title_desc: DataTypes.TEXT,
    content_title: DataTypes.STRING,
    content_desc: DataTypes.TEXT,
    is_available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'jobs',
  });
  return jobs;
};