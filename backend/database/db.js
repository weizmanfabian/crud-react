import { Sequelize } from 'sequelize';
import { configDatabase } from '../config.js';



const db = new Sequelize(configDatabase.database, configDatabase.user, configDatabase.password, {
  host: configDatabase.host,
  dialect: configDatabase.dialect
})

export default db;