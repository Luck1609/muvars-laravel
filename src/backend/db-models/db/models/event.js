'use strict';

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('event', {
    name: {
      type: DataTypes.STRING,
      field: 'name'
    },
    flyer: {
      type: DataTypes.STRING,
      field: 'flyer'
    },
    location: {
      type: DataTypes.STRING,
      field: 'location'
    },
    slug: {
      type: DataTypes.STRING,
      field: 'slug'
    },
    time: {
      type: DataTypes.DATE,
      field: 'time'
    },
    price: {
      type: DataTypes.FLOAT,
      field: 'price'
    },
    status: {
      type: DataTypes.BOOLEAN,
      field: 'status'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'events' });

  return Event;
};
