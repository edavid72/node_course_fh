const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

const getUserById = (id, callback) => {
  user = users.find((user) => {
    return user.id === id;
  });
  if (!user) {
    return callback(`Usuario no encontrado con el id ${id}`);
  }
  return callback(null, user);
};

module.exports = {
  getUserById,
};
