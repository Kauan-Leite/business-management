const { Enterprise, Address } = require('../models');

const getAll = async () => {
  const empresas = await Enterprise.findAll({
    include: { model: Address, as: 'address', attributes: ['street', 'number', 'district', 'city', 'state'] },
  });

  return empresas;
};

module.exports = {
  getAll,
}