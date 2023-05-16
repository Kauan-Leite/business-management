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

module.exports = {
  getAll,
}