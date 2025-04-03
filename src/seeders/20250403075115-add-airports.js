'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    queryInterface.bulkInsert('Airports', [{
      name: 'Los Angeles International Airport',
      address: '1 World Way, Los Angeles, CA 90045',
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'John F. Kennedy International Airport',
      address: 'JFK Access Rd, Jamaica, NY 11430',
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'O\'Hare International Airport',
      address: '10000 W O\'Hare Ave, Chicago, IL 60666',
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Hartsfield–Jackson Atlanta International Airport',
      address: '6000 N Terminal Pkwy, Atlanta, GA 30320',
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Denver International Airport',
      address: '8500 Peña Blvd, Denver, CO 80249',
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'San Francisco International Airport',
      address: 'San Francisco, CA 94128',
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
