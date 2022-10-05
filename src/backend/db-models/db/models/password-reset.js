'use strict';

module.exports = (sequelize, DataTypes) => {
  const PasswordReset = sequelize.define('passwordReset', {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: 'email'
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'token'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'password_resets' });

  return PasswordReset;
};
