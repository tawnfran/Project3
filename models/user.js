const bcrypt = require('bcryptjs');

//Convert the following to Sequelize
// userSchema.methods = {
//   checkPassword: function (inputPassword) {
//   return bcrypt.compareSync(inputPassword, this.password)
// },
//   hashPassword: plainTextPassword => {
//   return bcrypt.hashSync(plainTextPassword, 10)
//   }
// }


module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("user", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        fullname: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        // lastname: {
        //     type: DataTypes.STRING,
        //     notEmpty: true
        // },

        username: {
            type: DataTypes.TEXT
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        // eslint-disable-next-line camelcase
        last_login: {
            type: DataTypes.DATE
        },

        status: {
            type: DataTypes.ENUM("active", "inactive"),
            defaultValue: "active"
        }
    });


    return User;
}

