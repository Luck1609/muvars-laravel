import { Model, DataTypes } from "sequelize";
import DB from "../connection";


export default class Agency extends Model {}

Agency.init({
  name: {
    type: DataTypes.STRING
  },
  location: {
    type: DataTypes.STRING
  },
  location_lng: {
    type: DataTypes.STRING,
    allowNull: true
  },
  location_lat: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING,
    unique: true,
    min: 10,
    max: 13,
    is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
  },
  alt_phones: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    isEmail: true
  },
  email_verified_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  about: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    isIn: [[true, false]]
  },
  working_days: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  starting_hours: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  closing_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize: DB,
  modelName: 'Agency',
  tableName: 'agencies',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})