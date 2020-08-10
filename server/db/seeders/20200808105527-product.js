// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkInsert('product', [{
//         product_id: 1,
//         name: 'Arc Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '2',
//         department_id: 1
//       },
//       {
//         product_id: 2,
//         name: 'Arc d' / 'Triomphe',
//         description: 'The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!',
//         price: '20.99',
//         discounted_price: '88.00',
//         image: 'chartres-cathedral.gif',
//         image_2: 'chartres-cathedral-2.gif',
//         thumbnail: 'chartres-cathedral-thumbnail.gif',
//         display: '2',
//         department_id: 1
//       },
//       {
//         product_id: 3,
//         name: 'prada',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '2',
//         department_id: 1
//       },
//       {
//         product_id: 4,
//         name: 'Arc d Triomphe',
//         description: 'Theres good reason why the ship plays a prominent part on this shield!',
//         price: '55.99',
//         discounted_price: '34.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '2',
//         department_id: 1
//       },
//       {
//         product_id: 5,
//         name: 'gucci',
//         description: 'This beautiful and iconic T-shirt.',
//         price: '55.99',
//         discounted_price: '0.00',
//         image: 'gucci.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'gucci-thumbnail.gif',
//         display: '2',
//         department_id: 1
//       },
//       {
//         product_id: 6,
//         name: 'Alasce',
//         description: 'It was in this region of France that Gutenberg perfected his movable type. If he could only see what he started!',
//         price: '46.99',
//         discounted_price: '12.00',
//         image: 'alsace.gif',
//         image_2: 'alsace-2.gif',
//         thumbnail: 'alsace-thumbnail.gif',
//         display: '2',
//         department_id: 1
//       },
//       {
//         product_id: 7,
//         name: 'Apocalypse Tapestry',
//         description: 'One of the most famous tapestries of the Loire Valley, it dates from the 14th century. The T-shirt is of more recent vintage',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'Apocalypse-Tapestry.gif',
//         image_2: 'Apocalypse-Tapestry-2.gif',
//         thumbnail: 'Apocalypse-Tapestry-thumbnail.gif',
//         display: 0,
//         department_id: 1
//       },
//       {
//         product_id: 8,
//         name: 'century',
//         description: 'There were never any lady centaurs, so these guys had to mate with nymphs and mares. No wonder they were often in such bad moods!',
//         price: '100.99',
//         discounted_price: '10.00',
//         image: 'century.gif',
//         image_2: 'centaurs.gif',
//         thumbnail: 'century-thumbnail.gif',
//         display: '1',
//         department_id: 1
//       },
//       {
//         product_id: 9,
//         name: 'corsica',
//         description: 'Borrowed from Spain, the "Moors head" may have celebrated the Christians victory over the Moslems in that country.',
//         price: '14.99',
//         discounted_price: '2.00',
//         image: 'corsica.gif',
//         image_2: 'corsica-2.gif',
//         thumbnail: 'corsica-thumbnail.gif',
//         display: '1',
//         department_id: 1
//       },
//       {
//         product_id: 10,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '1',
//         department_id: 1
//       },
//       {
//         product_id: 11,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '1',
//         department_id: 1
//       },
//       {
//         product_id: 12,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '3',
//         department_id: 1
//       },
//       {
//         product_id: 13,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '3',
//         department_id: 1
//       },
//       {
//         product_id: 14,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '3',
//         department_id: 1
//       },
//       {
//         product_id: 15,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '3',
//         department_id: 1
//       },
//       {
//         product_id: 16,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '3',
//         department_id: 1
//       },
//       {
//         product_id: 17,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '3',
//         department_id: 1
//       },
//       {
//         product_id: 18,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '3',
//         department_id: 1
//       },
//       {
//         product_id: 19,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '2',
//         department_id: 1
//       },
//       {
//         product_id: 20,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '2',
//         department_id: 1
//       },
//       {
//         product_id: 21,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '2',
//         department_id: 1
//       },
//       {
//         product_id: 22,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '2',
//         department_id: 2
//       },
//       {
//         product_id: 23,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '2',
//         department_id: 2
//       },
//       {
//         product_id: 24,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '1',
//         department_id: 3
//       },
//       {
//         product_id: 25,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '1',
//         department_id: 3
//       },
//       {
//         product_id: 26,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '1',
//         department_id: 3
//       },
//       {
//         product_id: 27,
//         name: 'Arc d' / 'Triomphe',
//         description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: '1',
//         department_id: 2
//       },
//     ], {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete('product', null, {});
//   }
// };