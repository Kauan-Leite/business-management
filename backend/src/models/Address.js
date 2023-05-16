const AddressModel = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    enterpriseId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'address',
    underscored: true,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Enterprise,
        { foreignKey: 'enterpriseId', as: 'enterprise' }
      );
  };

  return Address;
};

module.exports = AddressModel;