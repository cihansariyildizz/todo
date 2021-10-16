import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const Todo = sequelize.define('datas', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    },
   todos: {
      type: Sequelize.TEXT('long'),
      allowNull: false,
   }
});

export default Todo;