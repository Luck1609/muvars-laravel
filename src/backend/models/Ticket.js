import { Model, DataTypes } from "sequelize";
import sequelize from "../connection";


export default class Ticket extends Model {}

Ticket.init({
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING,
    min: 10,
    max: 13,
    is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
  },
  emergency_contact_phone: {
    type: DataTypes.STRING,
    min: 10,
    max: 13,
    is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
  },
  emergency_contact_name: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING,
    isIn: [['male', 'female', 'other']]
  },
  seat_no: {
    type: DataTypes.INTEGER
  },
  origin: {
    type: DataTypes.STRING
  },
  destination: {
    type: DataTypes.STRING
  },
  bus_no: {
    type: DataTypes.STRING
  },
  ticket_no: {
    type: DataTypes.STRING
  },
  fare: {
    type: DataTypes.STRING
  },
  travel_date: {
    type: DataTypes.DATE
  },
  travel_date: {
    type: DataTypes.STRING,
    isIn: [['Pending', 'Completed', 'Cancelled']]
  },
}, {
  sequelize,
  modelName: 'Ticket',
  tableName: 'tickets',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})