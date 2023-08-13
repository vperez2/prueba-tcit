import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//   });

export const sequelize = new Sequelize( process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD,{ 
    host: 'localhost',
    dialect: 'postgres'
})
