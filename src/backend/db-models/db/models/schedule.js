'use strict';

module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('schedule', {
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    terminalId: {
      type: DataTypes.INTEGER,
      field: 'terminal_id'
    },
    busId: {
      type: DataTypes.INTEGER,
      field: 'bus_id'
    },
    origin: {
      type: DataTypes.STRING,
      field: 'origin'
    },
    destination: {
      type: DataTypes.STRING,
      field: 'destination'
    },
    restStop: {
      type: DataTypes.STRING,
      field: 'rest_stop'
    },
    fare: {
      type: DataTypes.FLOAT,
      field: 'fare'
    },
    reportingTime: {
      type: DataTypes.DATE,
      field: 'reporting_time'
    },
    departureTime: {
      type: DataTypes.DATE,
      field: 'departure_time'
    },
    busType: {
      type: DataTypes.STRING,
      field: 'bus_type'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'schedules' });

  return Schedule;
};
