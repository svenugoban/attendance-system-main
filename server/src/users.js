const bcrypt = require('bcryptjs');

// Dummy user data
const users = [
  {
    id: 1,
    username: 'user1',
    password: bcrypt.hashSync('password1', 8)
  },
  {
    id: 2,
    username: 'user2',
    password: bcrypt.hashSync('password2', 8)
  },
  {
    id: 3,
    username: 'user3',
    password: bcrypt.hashSync('password3', 8)
  }
];

module.exports = users;
