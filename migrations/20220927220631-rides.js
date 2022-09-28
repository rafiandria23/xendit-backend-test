'use strict';

const tableName = 'rides';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(tableName, {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			/* eslint-disable camelcase */
			start_lat: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			start_long: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			end_lat: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			end_long: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			rider_name: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			driver_name: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			driver_vehicle: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			/* eslint-disable new-cap */
			created_at: {
				type: Sequelize.DATE(),
				defaultValue: Sequelize.NOW,
			},
			updated_at: {
				type: Sequelize.DATE(),
				defaultValue: Sequelize.NOW,
			},
			/* eslint-enable camelcase */
			/* eslint-enable new-cap */
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable(tableName);
	},
};
