'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'attribute',
			[
				{
					attribute_id: 1,
					name: 'Size'
				},
				{
					attribute_id: 2,
					name: 'Color'
				}
			],
			{}
		);
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('attribute', null, {});
	}
};
