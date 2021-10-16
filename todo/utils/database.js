import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;