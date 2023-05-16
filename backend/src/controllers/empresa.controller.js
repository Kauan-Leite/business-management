const empresaService = require('../services/empresa.service');

const getAll = async (req, res) => {
  try {
    const data = await empresaService.getAll();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }

};

module.exports = {
  getAll,
}