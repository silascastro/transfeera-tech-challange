'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const transaction = await queryInterface.sequelize.transaction();
        await queryInterface.addColumn('recebedor', 'status',
            {
                type: Sequelize.ENUM,
                values: ["validado", "rascunho"],
                defaultValue: 'rascunho'
            },
            { transaction },
        )
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('recebedor','status');
    }
};