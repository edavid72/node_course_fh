const getage = require('get-age');

const getAge = (birthday) => {
  if (!birthday) {
    return new Error('"birthday" is required!');
  }

  return getage(birthday);
};

module.exports = {
  getAge,
};
