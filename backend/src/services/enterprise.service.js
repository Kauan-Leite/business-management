const { Enterprise, Address } = require('../models');

const getAll = async () => {
  const empresas = await Enterprise.findAll({
    include: { model: Address, as: 'address', attributes: ['street', 'number', 'district', 'city', 'state'] },
  });

  return empresas;
};

const getById = async (id) => {
  const empresa = await Enterprise.findByPk(id, {
    include: { model: Address, as: 'address', attributes: ['street', 'number', 'district', 'city', 'state'] },
  });

  return empresa;
}

module.exports = {
  getAll,
  getById,
}