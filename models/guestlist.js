module.exports = function (sequelize, Sequelize) {
    var Guestlist = sequelize.define("Guestlist", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        RSVP: {
            type: Sequelize.STRING
        },
        meal: {
            type: Sequelize.STRING
        },
        plusOne: {
            type: Sequelize.BOOLEAN
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP()")
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP()")
        },
        whoseList: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Guestlist;
};
