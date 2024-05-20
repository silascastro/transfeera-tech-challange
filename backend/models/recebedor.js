'use strict';
const {
  Model, Sequelize, DataTypes
} = require('sequelize');
const sequelize = require('../config/database.js');

const Recebedor = sequelize.define(
  'recebedor',
  {
    nome: {
      type: DataTypes.STRING,
      
    },
    cpf:{
      type:  DataTypes.STRING
    },
    email: {
      type:  DataTypes.STRING
    },
    chave_pix: {
      type:  DataTypes.STRING
    },
    chave_tipo: {
      type: DataTypes.ENUM,
      values: ["email", "telefone", "cpf", "aleatorio"],
    }
  }
);


module.exports = Recebedor;