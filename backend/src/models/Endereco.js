const EnderecoModel = (sequelize, DataTypes) => {
  const Endereco = sequelize.define('Endereco', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'enderecos',
    underscored: true
  });

  Endereco.associate = (models) => {
    Endereco.belongsTo(models.Empresa,
      { foreignKey: 'empresaId', as: 'empresas'})
  };

  return Endereco;
};

module.exports = EnderecoModel;