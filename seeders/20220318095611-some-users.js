"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Joaquim Dantas",
        email: "j.dantas@servmail.com",
        phone: 2345678,
        password: "superfodapassword",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Eduarda Capadocia",
        email: "eda.capa@mail&mail.com",
        phone: 32522222,
        password: "naotaofodapassword",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
