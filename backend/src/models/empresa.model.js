const EmpresaModel = (sequelize, DataTypes) => {
  const Empresa = sequelize.define('Empresa', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nomeEmpresa: DataTypes.STRING,
    enderecoDaEmpresa: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'Empresa',
    underscored: true,
  });

  Empresa.associate = (models) => {
    Empresa.hasOne(models.Endereco,
      { foreignKey: 'id', as: 'endereco'})
  }

  return Empresa;
};

module.exports = EmpresaModel;