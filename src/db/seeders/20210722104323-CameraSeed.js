module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cameras', [
      {
        title: 'FHAZ',
        roverid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'RHAZ',
        roverid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'MAST',
        roverid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'CHEMCAM',
        roverid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'MAHLI',
        roverid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'MARDI',
        roverid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'NAVCAM',
        roverid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'FHAZ',
        roverid: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'RHAZ',
        roverid: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'NAVCAM',
        roverid: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'PANCAM',
        roverid: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'MINITES',
        roverid: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'FHAZ',
        roverid: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'RHAZ',
        roverid: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'NAVCAM',
        roverid: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'PANCAM',
        roverid: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'MINITES',
        roverid: 3,
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
