'use strict';

module.exports = (sequelize, DataTypes) => {
  const Verifier = sequelize.define('verifier', {
    name: {
      type: DataTypes.STRING,
      field: 'name'
    },
    email: {
      type: DataTypes.STRING,
      field: 'email'
    },
    phone: {
      type: DataTypes.STRING,
      field: 'phone'
    },
    password: {
      type: DataTypes.STRING,
      field: 'password'
    },
    eventId: {
      type: DataTypes.INTEGER,
      field: 'event_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'verifiers' });

  return Verifier;
};
