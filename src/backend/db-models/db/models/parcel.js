'use strict';

module.exports = (sequelize, DataTypes) => {
  const Parcel = sequelize.define('parcel', {
    name: {
      type: DataTypes.STRING,
      field: 'name'
    },
    phone: {
      type: DataTypes.STRING,
      field: 'phone'
    },
    altPhone: {
      type: DataTypes.STRING,
      field: 'alt_phone'
    },
    description: {
      type: DataTypes.STRING,
      field: 'description'
    },
    receiverName: {
      type: DataTypes.STRING,
      field: 'receiver_name'
    },
    receiverPhone: {
      type: DataTypes.STRING,
      field: 'receiver_phone'
    },
    receiverAltPhone: {
      type: DataTypes.STRING,
      field: 'receiver_alt_phone'
    },
    parcelId: {
      type: DataTypes.STRING,
      field: 'parcel_id'
    },
    status: {
      type: DataTypes.BOOLEAN,
      field: 'status'
    },
    preciousCargo: {
      type: DataTypes.BOOLEAN,
      field: 'precious_cargo'
    },
    fee: {
      type: DataTypes.FLOAT,
      field: 'fee'
    },
    scheduleId: {
      type: DataTypes.INTEGER,
      field: 'schedule_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'parcels' });

  return Parcel;
};
