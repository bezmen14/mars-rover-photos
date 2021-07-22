const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rover extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Camera }) {
      // у одного марсохода может быть много камер
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
