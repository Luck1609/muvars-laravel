import { Model, DataTypes } from "sequelize";
import sequelize from "../connection";
import Schedule from "./Schedule";


export default class Parcel extends Model {}

Parcel.init({
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
  alt_phone: {
    type: DataTypes.STRING,
    allowNull: true,
    min: 10,
    max: 13,
    is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  receiver_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  parcel_id: {
    type: DataTypes.STRING, // random string of 10 characters
  },
  receiver_phone: {
    type: DataTypes.STRING,   
    min: 10,
    max: 13,
    is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
  },
  receiver_alt_phone: {
    type: DataTypes.STRING,   
    min: 10,
    max: 13,
    is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
  },
  delivery_status: {
    type: DataTypes.STRING, // random string of 10 characters
    isIn: [[true, false]],
    defaultValue: false
  },
  precious_cargo: {
    type: DataTypes.STRING, // random string of 10 characters
    isIn: [[true, false]],
    defaultValue: false
  },
  fee: {
    type: DataTypes.FLOAT, // random string of 10 characters
  },
}, {
  sequelize,
  modelName: 'Parcel',
  tableName: 'parcels',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});


Parcel.belongsTo(Schedule)