const enterpriseService = require('../services/enterprise.service');

const getAll = async (req, res) => {
  try {
    const data = await enterpriseService.getAll();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await enterpriseService.getById(id);

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Empresa não encontrada' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}

module.exports = {
  getAll,
  getById,
}