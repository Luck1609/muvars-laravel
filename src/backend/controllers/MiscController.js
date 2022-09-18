import { Op } from "sequelize";
import Agency from "backend/models/Agency";
import Utils from "backend/utils";

export default class MiscController extends Utils {
  async index() {
    try {
      const agencies = await Agency.findAll({
        where: {
          // email: {[Op.like]: `%${}%`}
        }
      });
      return this.success({ data: agencies });
    } catch ({ message }) {
      throw message;
    }
  }

  async store() {
    try {
      this.payload.starting_hours = `2022-09-16T${this.payload.starting_hours}`;
      this.payload.closing_time = `2022-09-16T${this.payload.closing_time}`;

      await Agency.create(this.payload);
      return this.success({ message: `Agency ${this.CREATED}` });
    } catch (error) {
      throw message;
    }
  }

  async show() {
    try {
      const agency = Agency.findOne();
    } catch ({ message }) {
      throw message;
    }
  }

  async update() {
    console.log('selected agency', this.id)
    try {
      const agency = await Agency.findOne({where: {id: this.id}});
      if (!agency) throw `Agency ${this.NOT_FOUND}`;

      await agency.update(this.payload);
      
      return this.success({message: `Agency information ${this.UPDATED}`})
    } catch({message}) {
      console.log('Update error', message)
      throw new Error(`Agency ${this.UPDATE_FAILED} ${message}`)
    }
    
  }

  async delete() {}
}
