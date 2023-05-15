'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Enderecos', [
      {
        id: 1,
        rua: 'Av. Airton Pretini',
        numero: 10,
        bairro: 'Penha de França',
        cidade: 'São Paulo',
        estado: 'São Paulo'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Enderecos', null, {})
  }
};
