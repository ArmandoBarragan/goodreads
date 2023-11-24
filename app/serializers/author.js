const serialize = require('serialize-javascript');

function serializeAuthor(author) {
  return {
    id: author.author_id,
    authorName: author.author_name,
  };
}

function serializeAuthors(authors) {
  return authors.map(serializeAuthor);
}

module.exports = {
  serializeAuthor,
  serializeAuthors
};
