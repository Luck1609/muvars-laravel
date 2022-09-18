import { Model, DataTypes } from "sequelize";
import sequelize from "../connection";
import Terminal from "./Terminal";
import User from "./user";


export default class Destination extends Model {}

Destination.init({
  origin: {
    type: DataTypes.STRING
  },
  destination: {
    type: DataTypes.STRING
  },
  stops: {
    type: DataTypes.TEXT
  },
  rest_stops: {
    type: DataTypes.TEXT
  },
  fare: {
    type: DataTypes.FLOAT
  },
}, {
  sequelize,
  modelName: 'Destination',
  tableName: 'Destinations',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

Destination.belongsTo(Terminal)