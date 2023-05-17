import axios from 'axios';

const getAll = async () => {
  const url = 'http://localhost:3001/empresas';

  try {
    const response = await axios.get(url);
    const result = (await response).data
    return result;
  } catch (error) {
    console.log(error);
  }
}

const getById = async (id) => {
  const url = `http://localhost:3001/empresas/${id}`;

  try {
    const response = await axios.get(url);
    const result = (await response).data
    return result;
  } catch (error) {
    console.log(error);
  }
}

const update = async (id, data) => {
  const url = `http://localhost:3001/empresas/${id}`;

  try {
    const response = await axios.put(url, data);
    const result = (await response).data
    return result;
  } catch (error) {
    console.log(error);
  }
}

const remove = async (id) => {
  const url = `http://localhost:3001/empresas/${id}`;

  try {
    const response = await axios.delete(url);
    const result = (await response).data
    return result;
  } catch (error) {
    console.log(error);
  }
}

const create = async (data) => {
  const url = `http://localhost:3001/empresas`;

  try {
    const response = await axios.post(url, data);
    const result = (await response).data
    return result;
  } catch (error) {
    console.log(error);
  }
}

export {
  getAll,
  getById,
  update,
  remove,
  create,
};