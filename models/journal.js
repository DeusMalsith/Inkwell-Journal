'use strict';
module.exports = (sequelize, DataTypes) => {
  const journal = sequelize.define('journal', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    public: DataTypes.BOOLEAN,
    image: DataTypes.STRING
  }, {});
  journal.associate = function(models) {
    models.journal.belongsTo(models.user);
  };
  return journal;
};