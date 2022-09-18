import { Model, DataTypes } from "sequelize";
import sequelize from "../connection";


export default class User extends Model {}

User.init({
  firstname: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING
  },
  fullname: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.firstname} ${this.lastname}`;
    },
    set(value) {
      throw new Error('Do not try to set the `fullName` value!');
    }
  },
  email: {
    type: DataTypes.STRING,
    isEmail: true
  },
  password: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING,
    isIn: [['male', 'female']]
  },
  phone: {
    type: DataTypes.STRING,
    unique: true,
    min: 10,
    max: 13,
    is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
  },
  alt_phones: {
    type: DataTypes.STRING
  },
  email_verified_at: {
    type: DataTypes.DATE
  },
}, {
  sequelize,
  modelName: 'user',
  tableName: 'users',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})