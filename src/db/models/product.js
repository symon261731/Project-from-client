const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    url: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sale: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    describe: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
