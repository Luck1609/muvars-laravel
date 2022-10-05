'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('ticket', {
    name: {
      type: DataTypes.STRING,
      field: 'name'
    },
    email: {
      type: DataTypes.STRING,
      field: 'email'
    },
    terminalId: {
      type: DataTypes.INTEGER,
      field: 'terminal_id'
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'phone'
    },
    emergencyContactName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'emergency_contact_name'
    },
    emergencyContactPhone: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'emergency_contact_phone'
    },
    gender: {
      type: DataTypes.STRING,
      field: 'gender'
    },
    seatNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'seat_no'
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'origin'
    },
    destination: {
      type: DataTypes.STRING,
      field: 'destination'
    },
    busNo: {
      type: DataTypes.INTEGER,
      field: 'bus_no'
    },
    ticketNo: {
      type: DataTypes.STRING,
      field: 'ticket_no'
    },
    fare: {
      type: DataTypes.FLOAT,
      field: 'fare'
    },
    travelDate: {
      type: DataTypes.DATEONLY,
      field: 'travel_date'
    },
    status: {
      type: DataTypes.STRING,
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
  }, { tableName: 'tickets' });

  return Ticket;
};
