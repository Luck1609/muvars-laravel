import { Sequelize } from 'sequelize';

const DB = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  // storage: database,
  host: 'localhost'
});

export default DB;