import bcrypt from "bcrypt";
import User from "../models/user";
import Utils from "../utils";

export default class UserController extends Utils {
  async index() {
    try {
      const users = await User.findAll();
      console.log("Users found in database", users);
      return this.success({
        data: users,
      });
    } catch ({ message }) {
      return this.error({ message });
    }
  }

  async store() {
    // return 'store user'
    this.payload.password = bcrypt.hashSync(this.payload.password, 10);
    // const check = bcrypt.compareSync(this.payload.password, 10);
    // return hashed_password
    console.log('Created user  info', this.payload)
    const user = await User.create(this.payload)
    console.log('Created user  info', user)
    return this.success({ message: `User ${this.CREATED}` });
  }

  async show() {
    return "show ready";
  }

  async update() {
    return "update ready";
  }

  async delete() {
    return "delete ready";
  }

  // authen
}
