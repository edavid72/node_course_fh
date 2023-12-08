const { getAge, getUuid } = require('../plugins');

const obj = { name: 'Mateo', birthday: '1991-07-02' };

const buildPerson = ({ name, birthday }) => {
  return {
    id: getUuid(),
    name: name,
    birthday: birthday,
    age: getAge(birthday),
  };
};

const mateo = buildPerson(obj);

console.log(mateo);
