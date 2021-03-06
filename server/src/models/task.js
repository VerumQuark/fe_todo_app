'use strict';
import { Model } from 'sequelize';

class Task extends Model {

}

module.exports = (sequelize, DataTypes) => {

  const Task = sequelize.define( 'Task', {
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  }, {} );

  Task.associate = function (models) {
    Task.belongsTo( models.User, {
      foreignKey: {
        field: 'userId',
      },
      as: {
        singular: 'owner',
        plural: 'owners'
      }
    } );
  };
  return Task;
};