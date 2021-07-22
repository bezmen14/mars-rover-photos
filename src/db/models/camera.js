const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Camera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Rover }) {
      // одна камера относится к нескольким марсоходам
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
