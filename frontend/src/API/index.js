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

export default getAll;