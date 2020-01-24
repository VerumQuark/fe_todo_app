'use strict';
import {Model} from 'sequelize';

class Task extends  Model {

}

module.exports = (sequelize, DataTypes) => {
  Task.init( {
    isDone: DataTypes.BOOLEAN,
    value: DataTypes.STRING,
    deadline: DataTypes.DATE
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.User, {
      foreignKey: {
        field: 'userId',
      }
    });
  };
  return Task;
};