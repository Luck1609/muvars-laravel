'use strict';

module.exports = (sequelize, DataTypes) => {
  const PickupPoint = sequelize.define('pickupPoint', {
    location: {
      type: DataTypes.STRING,
      field: 'location'
    },
    time: {
      type: DataTypes.DATE,
      field: 'time'
    },
    departure: {
      type: DataTypes.DATE,
      field: 'departure'
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
  }, { tableName: 'pickup_points' });

  return PickupPoint;
};
