import { Model, DataTypes } from "sequelize";
import sequelize from "../connection";


export default class Bus extends Model {}

Bus.init({
  label: {
    type: DataTypes.STRING
  },
  capacity: {
    type: DataTypes.STRING
  },
  plate_no: {
    type: DataTypes.STRING,
    isEmail: true
  },
  type: {
    type: DataTypes.STRING
  },
  color: {
    type: DataTypes.STRING
  },
  seat_arrangement: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'Bus',
  tableName: 'buses',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})