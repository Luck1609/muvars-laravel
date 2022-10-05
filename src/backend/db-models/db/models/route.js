'use strict';

module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('route', {
    region: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'region'
    },
    town: {
      type: DataTypes.STRING,
      field: 'town'
    },
    agencyId: {
      type: DataTypes.INTEGER,
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
  }, { tableName: 'routes' });

  return Route;
};
