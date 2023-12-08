const { SHELL, HOSTNAME, NODE, LOGNAME } = process.env;

console.table({ SHELL, HOSTNAME, NODE, LOGNAME });

// Destructuring

const heros = ['flash', 'batman', 'superman', 'wonderWoman'];

const [__, ba, _, won] = heros;
console.log(__, won, ba);

const user = {
  name: 'mateo',
  lastName: 'Cervellon',
  age: '4.8',
  eyes: 'brown',
};

const { name, age } = user;
console.log(name, age);
