'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile_companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      profile_companies.belongsTo(models.users, {
        foreignKey: "user_id"
      });
      
    }
  }
  profile_companies.init({
    user_id: DataTypes.INTEGER,
    company_name: DataTypes.STRING,
    company_address: DataTypes.TEXT,
    company_contact: DataTypes.STRING,
    data: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'profile_companies',
  });
  return profile_companies;
};