const serialize = require('serialize-javascript');

function serializeUser(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
}

function serializeUsers(users) {
  return users.map(serializeUser);
}

module.exports = {
  serializeUser,
  serializeUsers
};
