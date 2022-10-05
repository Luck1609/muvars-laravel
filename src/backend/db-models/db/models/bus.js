'use strict';

module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define('bus', {
    label: {
      type: DataTypes.STRING,
      field: 'label'
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'capacity'
    },
    plateNo: {
      type: DataTypes.STRING,
      field: 'plate_no'
    },
    agencyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'agency_id'
    },
    color: {
      type: DataTypes.STRING,
      field: 'color'
    },
    seatArrangement: {
      type: DataTypes.STRING,
      field: 'seat_arrangement'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'buses' });

  return Bus;
};
