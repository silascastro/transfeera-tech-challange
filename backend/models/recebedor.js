'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recebedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recebedor.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    chave_pix: DataTypes.STRING,
    chave_tipo: DataTypes.ENUM(["email", "telefone", "cpf", "aleatória"])
  }, {
    sequelize,
    modelName: 'Recebedor',
  });
  return Recebedor;
};