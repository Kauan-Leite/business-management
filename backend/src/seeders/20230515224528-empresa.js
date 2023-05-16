'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('empresas', [
      {
        id: 1,
        nomeDaEmpresa: 'Osten Moove',
        enderecoDaEmpresa: 1
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('empresas', null, {})
  }
};
