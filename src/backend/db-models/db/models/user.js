'use strict';
import bcrypt from 'sequelize-bcrypt'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'firstname'
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'lastname'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'email'
    },
    gender: {
      type: DataTypes.STRING,
      field: 'gender'
    },
    phone: {
      type: DataTypes.STRING,
      // allowNull: false,
      field: 'phone'
    },
    altPhone: {
      type: DataTypes.STRING,
      field: 'alt_phone'
    },
    emailVerifiedAt: {
      type: DataTypes.DATE,
      field: 'email_verified_at'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'password'
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_admin'
    },
    agencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'agency_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { 
    tableName: 'users', 
    defaultScope: {
      attributes: {
        exclude: ['password']
      }
    },
    scopes: {
      showPassword: {
        attributes: {
          include: ['password']
        }
      }
    }
  });

  bcrypt(User, {
    field: 'password',
    compare: 'authenticate'
  })

  return User;
};
