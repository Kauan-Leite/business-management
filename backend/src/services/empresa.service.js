const { Empresa } = require('../models');

const getAll = async () => {
  const empresas = await Empresa.findAll({});

  return empresas;
};

module.exports = {
  getAll,
}