const serialize = require('serialize-javascript');

function serializeAuthor(author) {
  return {
    id: author.id,
    authorName: author.authorName,
  };
}

function serializeAuthors(authors) {
  return authors.map(serializeAuthor);
}

module.exports = {
  serializeAuthor,
  serializeAuthors
};
