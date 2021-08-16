const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rover extends Model {
    static associate({ Camera }) {
      this.hasMany(Camera, { foreignKey: 'roverid' });
    }
  }
  Rover.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Rover',
  });
  return Rover;
};
