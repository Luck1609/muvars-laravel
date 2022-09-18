import { Model, DataTypes } from "sequelize";
import sequelize from "../connection";


export default class Schedule extends Model {}

Schedule.init({
  bus_no: {
    type: DataTypes.STRING
  },
  reporting_time: {
    type: DataTypes.DATE
  },
  departure_time: {
    type: DataTypes.DATE
  },
  bus_type: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  sequelize,
  modelName: 'Schedule',
  tableName: 'schedules',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

Schedule.belongsTo()