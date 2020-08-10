'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('category', [{
      category_id: 1,
      department_id: 1,
      name: 'French',
      description: 'The French have always had an eye for beauty. One look at the T-shirts below and you ll see that same appreciation has been applied abundantly to their postage stamps. Below are some of our most beautiful and colorful T-shirts,  them!'
    }, {
      category_id: 2,
      department_id: 1,
      name: 'Italian',
      description: 'The full and resplendent treasure chest of art, literature, music, and science that Italy has given the world is reflected splendidly in its postal stamps. If we could, we would dedicate hundreds of T-shirts to this amazing treasur be'
    }, {
      category_id: 3,
      department_id: 1,
      name: 'Irish',
      description: 'It was Churchill who remarked that he thought the Irish most curious because they didnt want to be English. How right he was! But then, he was half-American, wasn"t he? If you have an Irish genealogy you will want these T-Patric'
    }, {
      category_id: 4,
      department_id: 2,
      name: 'Animal',
      description: ' Our ever-growing selection of beautiful animal T-shirts represents critters from everywhere, both wild and domestic. If you dont see the T-shirt with the animal youre looking for, tell us and well find it!'
    }, {
      category_id: 5,
      department_id: 2,
      name: 'Flower',
      description: 'These unique and beautiful flower T-shirts are just the item for the gardener, flower arranger, florist, or general lover of things beautiful. Surprise the flower in your life with one of the beautiful botanicallf!'
    }, {
      category_id: 6,
      department_id: 3,
      name: 'Christmas',
      description: ' Because this is a unique Christmas T-shirt that youll only wear a few times a year, it will probably last for decades (unless some grinch nabs it from you, of course). Far into the future, after you.'
    }, {
      category_id: 7,
      department_id: 3,
      name: 'Valentine',
      description: 'For the more timid, all you have to do is wear your heartfelt message to get it across. Buy one for you and your sweetie(s) today!'
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('category', null, {});
  }
};