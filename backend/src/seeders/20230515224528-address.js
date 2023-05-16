"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("address", [
      {
        street: "Av. Airton Pretini",
        number: 10,
        district: "Penha de França",
        city: "São Paulo",
        state: "São Paulo",
        enterprise_id: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("address", null, {});
  },
};
