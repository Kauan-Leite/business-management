const EnterpriseModel = (sequelize, DataTypes) => {
  const Enterprise = sequelize.define('Enterprise', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'enterprise',
  });

  Enterprise.associate = (models) => {
    Enterprise.hasOne(models.Address, 
      { foreignKey: 'enterpriseId', as: 'address' });
  };

  return Enterprise;
};

module.exports = EnterpriseModel;