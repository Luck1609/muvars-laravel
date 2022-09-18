import { Model, DataTypes } from "sequelize";
import DB from "../connection";
import Agency from "./Agency";
import User from "./user";

export default class AgencyUsers extends Model {}

AgencyUsers = DB.define("AgencyDriver", {
  AgencyId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Agency",
      key: "id",
    },
  },
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: "User",
      key: "id",
    },
  },
});


User.belongsTo(Agency);
Agency.hasMany(User);