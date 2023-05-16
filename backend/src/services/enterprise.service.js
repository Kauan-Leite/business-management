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

const create = async (enterpiseInfos, addressInfos) => {
  const { id } = await Enterprise.create({ nome: enterpiseInfos.name });
  console.log(typeof(id));

  await Address.create({
    street: addressInfos.street,
    number: addressInfos.number,
    district: addressInfos.district,
    city: addressInfos.city,
    state: addressInfos.state,
    enterpriseId: id,
  });

  const empresa = await Enterprise.findByPk(id, {
    include: { model: Address, as: 'address', attributes: ['street', 'number', 'district', 'city', 'state'] },
  });

  return empresa;
}

module.exports = {
  getAll,
  getById,
  create,
}