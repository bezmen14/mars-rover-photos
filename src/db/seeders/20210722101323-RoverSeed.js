module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rovers', [
      {
        title: 'Curiosity',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Opportunity',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Spirit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
