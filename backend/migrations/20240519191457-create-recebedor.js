'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recebedor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      chave_pix: {
        type: Sequelize.STRING
      },
      chave_tipo : {
        type: Sequelize.ENUM,
        values: ["email", "telefone", "cpf", "aleatorio"]
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recebedor');
  }
};