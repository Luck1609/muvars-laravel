'use strict';

module.exports = (sequelize, DataTypes) => {
  const Agency = sequelize.define('agency', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    region: {
      type: DataTypes.STRING,
      field: 'region'
    },
    town: {
      type: DataTypes.STRING,
      field: 'town'
    },
    lng: {
      type: DataTypes.STRING,
      field: 'lng'
    },
    lat: {
      type: DataTypes.STRING,
      field: 'lat'
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      field: 'email'
    },
    phone: {
      type: DataTypes.STRING,
      field: 'phone'
    },
    altPhone: {
      type: DataTypes.STRING,
      field: 'alt_phone'
    },
    about: {
      type: DataTypes.TEXT,
      field: 'about'
    },
    website: {
      type: DataTypes.STRING,
      field: 'website'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'status'
    },
    workingDay: {
      type: DataTypes.STRING,
      field: 'working_day'
    },
    startingHour: {
      type: DataTypes.DATE,
      field: 'starting_hour'
    },
    closingTime: {
      type: DataTypes.DATE,
      field: 'closing_time'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'agencies' });

  return Agency;
};
