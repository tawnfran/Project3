const bcrypt = require("bcrypt-nodejs");

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
    var User = sequelize.define("User", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.TEXT
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        fullname: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        // lastname: {
        //     type: DataTypes.STRING,
        //     notEmpty: true
        // },

       
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
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

    // Creating a custom method for our User model. 
    //This will check if an unhashed password entered by the 
    //user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password

    // User.hook("beforeCreate", function (user) {
    //     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    // });

    User.beforeCreate(user => {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });


    return User;



}

