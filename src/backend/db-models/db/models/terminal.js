'use strict';

module.exports = (sequelize, DataTypes) => {
  const Terminal = sequelize.define('terminal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'region'
    },
    town: {
      type: DataTypes.STRING,
      field: 'town'
    },
    lat: {
      type: DataTypes.FLOAT,
      field: 'lat'
    },
    lng: {
      type: DataTypes.FLOAT,
      field: 'lng'
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'phone'
    },
    altPhone: {
      type: DataTypes.STRING,
      field: 'alt_phone'
    },
    agencyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  }, { tableName: 'terminals' });

  return Terminal;
};
