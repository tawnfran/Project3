module.exports = function (sequelize, Sequelize) {
    var Guestlist = sequelize.define("Guestlist", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        guests: {
            type: Sequelize.STRING
        },
        RSVP: {
            type: Sequelize.BOOLEAN
        },
        meal: {
            type: Sequelize.STRING
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
