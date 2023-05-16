const enterpriseService = require("../services/enterprise.service");

const getAll = async (req, res) => {
  try {
    const data = await enterpriseService.getAll();
    if (data.length > 0) {
      res.status(200).json(data);
    } else {
      res.status(200).json({ message: "Nenhuma Empresa Cadastrada!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await enterpriseService.getById(id);

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Empresa não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const create = async (req, res) => {
  const { name, street, number, district, city, state } = req.body;
  try {
    const data = await enterpriseService.create(
      { name },
      { street, number, district, city, state }
    );
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, street, number, district, city, state } = req.body;
  try {
    const data = await enterpriseService.update(
      { id: Number(id), name },
      { street, number, district, city, state }
    );
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Empresa não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await enterpriseService.remove(id);
    if (data > 0) {
      res.status(200).json({ message: `Empresa ${id} Removida!` });
    } else {
      res.status(404).json({ message: "Empresa não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
