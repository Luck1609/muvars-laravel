import { Model, DataTypes } from "sequelize";
import sequelize from "../connection";
import Agency from "./Agency";
import User from "./user";

export default class Terminal extends Model {}

Terminal.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    lng: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      min: 10,
      max: 13,
      is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
    },
    alt_phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    sequelize,
    modelName: "Terminal",
    tableName: "terminals",
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

Terminal.belongsTo(Agency);
Terminal.belongsTo(User, {
  foreignKey: {
    name: 'managerId',
    allowNull: true
  }
});