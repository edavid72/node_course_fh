const { emailTemplate } = require('./js-foundation/01_template');
require('./js-foundation/02_destructuring');
const { getUserById } = require('./js-foundation/03_callbacks');
const { getPoke } = require('./js-foundation/07_axios');
require('./js-foundation/05_factory_fn');

console.log(emailTemplate);
const id = 2;
getUserById(id, (error, user) => {
  if (error) {
    throw new Error(error);
  }
  console.log(user);
});


getPoke();

