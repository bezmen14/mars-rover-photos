const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Camera extends Model {
    static associate({ Rover }) {
      this.belongsTo(Rover, { foreignKey: 'roverid' });
    }
  }
  Camera.init({
    title: DataTypes.STRING,
    roverid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Camera',
  });
  return Camera;
};
