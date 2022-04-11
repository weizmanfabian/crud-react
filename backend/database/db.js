import { Sequelize } from 'sequelize';

const db = new Sequelize('database_app', 'baq', 'Asiste.2021', {
  host: 'localhost',
  dialect: 'mysql'
})

export default db;