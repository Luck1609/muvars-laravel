'use strict';

module.exports = (sequelize, DataTypes) => {
  const EventUser = sequelize.define('eventUser', {
    email: {
      type: DataTypes.STRING,
      field: 'email'
    },
    phone: {
      type: DataTypes.STRING,
      field: 'phone'
    },
    token: {
      type: DataTypes.STRING,
      field: 'token'
    },
    eventId: {
      type: DataTypes.INTEGER,
      field: 'event_id'
    },
    verifier: {
      type: DataTypes.INTEGER,
      field: 'verifier'
    },
    pickupPointId: {
      type: DataTypes.INTEGER,
      field: 'pickup_point_id'
    },
    status: {
      type: DataTypes.BOOLEAN,
      field: 'status'
    },
    verifiedAt: {
      type: DataTypes.DATE,
      field: 'verified_at'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'event_users' });

  return EventUser;
};
