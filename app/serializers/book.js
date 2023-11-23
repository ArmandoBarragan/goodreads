const serialize = require('serialize-javascript');

function serializeBook(book) {
  return {
    id: book.id,
    title: book.title,
    authorId: book.authorId,
    publishedYear: book.publishedYear,
  };
}

function serializeBooks(books) {
  return books.map(serializeBook);
}

module.exports = {
  serializeBook,
  serializeBooks
};
