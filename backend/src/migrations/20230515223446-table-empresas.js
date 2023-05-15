'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeDaEmpresa: {
        type: Sequelize.STRING
      },
      enderecoDaEmpresa: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Enderecos',
          key: 'id'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Empresas')
  }
};
