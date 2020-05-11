'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('products', [{
        name: "Arc d' 'Triomphe",
        description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
        price: 14.99,
        discounted_price: 0.00,
        image: 'arc-d-triomphe.gif',
        image_2: 'arc-d-triomphe-2.gif',
        thumbnail: 'arc-d-triomphe-thumbnail.gif',
        display: 0
      },
      {
        name: 'Chartres Cathedral',
        description: 'The Fur Merchants. Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!',
        price: 16.95,
        discounted_price: 15.95,
        image: 'chartres-cathedral.gif',
        image_2: 'chartres-cathedral-2.gif',
        thumbnail: 'chartres-cathedral-thumbnail.gif',
        display: 2
      },
      {
        name: 'Coat of Arms',
        description: "There's good reason why the ship plays a prominent part on this shield!",
        price: 14.50,
        discounted_price: 0.00,
        image: 'coat-of-arms.gif',
        image_2: 'coat-of-arms-2.gif',
        thumbnail: 'coat-of-arms-thumbnail.gif',
        display: 0
      },
      {
        name: 'Gallic Cock',
        description: "This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you'd better get your T-shirt now!",
        price: 18.99,
        discounted_price: 16.99,
        image: 'gallic-cock.gif',
        image_2: 'gallic-cock-2.gif',
        thumbnail: 'gallic-cock-thumbnail.gif',
        display: 2
      },
      {
        name: 'Marianne',
        description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!',
        price: 15.95,
        discounted_price: 14.95,
        image: 'marianne.gif',
        image_2: 'marianne-2.gif',
        thumbnail: 'marianne-thumbnail.gif',
        display: 2
      },
      {
        name: 'Alsace',
        description: 'It was in this region of France that Gutenberg perfected his movable type. If he could only see what he started!',
        price: 16.50,
        discounted_price: 0.00,
        image: 'alsace.gif',
        image_2: 'alsace-2.gif',
        thumbnail: 'alsace-thumbnail.gif',
        display: 0
      },
      {
        name: 'Apocalypse Tapestry',
        description: 'One of the most famous tapestries of the Loire Valley, it dates from the 14th century. The T-shirt is of more recent vintage, however.',
        price: 20.00,
        discounted_price: 18.95,
        image: 'apocalypse-tapestry.gif',
        image_2: 'apocalypse-tapestry-2.gif',
        thumbnail: 'apocalypse-tapestry-thumbnail.gif',
        display: 0
      },
      {
        name: 'Centaur',
        description: 'There were never any lady centaurs, so these guys had to mate with nymphs and mares. No wonder they were often in such bad moods!',
        price: 14.99,
        discounted_price: 0.00,
        image: 'centaur.gif',
        image_2: 'centaur-2.gif',
        thumbnail: 'centaur-thumbnail.gif',
        display: 0
      },
      {
        name: 'Corsica',
        description: "Borrowed from Spain, the 'Moors head' may have celebrated the Christians' victory over the Moslems in that country.",
        price: 22.00,
        discounted_price: 0.00,
        image: 'corsica.gif',
        image_2: 'corsica-2.gif',
        thumbnail: 'corsica-thumbnail.gif',
        display: 0
      },
      {
        name: 'Haute Couture',
        description: 'This stamp publicized the dress making industry. Use it to celebrate the T-shirt industry!',
        price: 15.99,
        discounted_price: 14.95,
        image: 'haute-couture.gif',
        image_2: 'haute-couture-2.gif',
        thumbnail: 'haute-couture-thumbnail.gif',
        display: 3
      },
      {
        name: 'Iris',
        description: 'Iris was the Goddess of the Rainbow, daughter of the Titans Thaumas and Electra. Are you up to this T-shirt?!',
        price: 17.50,
        discounted_price: 0.00,
        image: 'iris.gif',
        image_2: 'iris-2.gif',
        thumbnail: 'iris-thumbnail.gif',
        display: 0
      },
      {
        name: 'Lorraine',
        description: 'The largest American cemetery in France is located in Lorraine and most of the folks there still appreciate that fact.',
        price: 16.95,
        discounted_price: 0.00,
        image: 'lorraine.gif',
        image_2: 'lorraine-2.gif',
        thumbnail: 'lorraine-thumbnail.gif',
        display: 0
      },
      {
        name: 'Mercury',
        description: 'Besides being the messenger of the gods, did you know that Mercury was also the god of profit and commerce? This T-shirt is for business owners!',
        price: 21.99,
        discounted_price: 18.95,
        image: 'mercury.gif',
        image_2: 'mercury-2.gif',
        thumbnail: 'mercury-thumbnail.gif',
        display: 2
      },
      {
        name: 'County of Nice',
        description: 'Nice is so nice that it has been fought over for millennia, but now it all belongs to France.',
        price: 12.95,
        discounted_price: 0.00,
        image: 'county-of-nice.gif',
        image_2: 'county-of-nice-2.gif',
        thumbnail: 'county-of-nice-thumbnail.gif',
        display: 0
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product', null, {});

  }
};