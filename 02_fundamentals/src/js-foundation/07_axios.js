const axios = require('axios');

const getPoke = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/ditto`;

  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPoke,
};
