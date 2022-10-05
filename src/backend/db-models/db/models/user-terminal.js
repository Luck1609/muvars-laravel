'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserTerminal = sequelize.define('userTerminal', {
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    terminalId: {
      type: DataTypes.INTEGER,
      field: 'terminal_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'user_terminals' });

  return UserTerminal;
};
