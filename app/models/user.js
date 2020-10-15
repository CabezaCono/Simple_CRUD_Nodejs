'use strict';
const { Model } = require('sequelize');
const string = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, { as: 'role', foreignKey: 'role_id'})
    }
  };
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  email: { 
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
          isEmail: { msg: 'Enmail no válido'},
          notNull: { msg: 'El "Email" no puede ser nulo'}
      }
  },
  name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
          is: {
              args: string,
              msg: 'El "Nombre" solo puede contener letras'
          },
          len: {
              args: [2,20],
              msg: 'El "Nombre" debe tener entre 2 y 20 caracteres'
          },
          notNull: { msg: 'El "Nombre" no puede ser nulo'}
      }
  },
  surname: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
          is: {
              args: string,
              msg: 'El "Primer Apellido" solo puede contener letras'
          },
          len: {
              args: [2,20],
              msg: 'El "Primer Apellido" debe tener entre 2 y 20 caracteres'
          },
          notNull: { msg: 'El "Primer Apellido" no puede ser nulo'}
      }
  },
  second_surname: {
      type: DataTypes.STRING(20),
      validate: {
          is: {
              args: string,
              msg: 'El Segundo Apellido" solo puede contener letras'
          },
          len: {
              args: [0,20],
              msg: 'El "Segundo Apellido" debe tener maximo 20 caracteres'
          }
      }
  }
  }, {
    sequelize,
    tableName: "users",
    modelName: 'User',
  });
  return User;
};