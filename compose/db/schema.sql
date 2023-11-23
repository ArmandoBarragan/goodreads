CREATE DATABASE IF NOT EXISTS goodreads;
USE goodreads;

CREATE TABLE IF NOT EXISTS user (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS author (
    author_id INT PRIMARY KEY AUTO_INCREMENT,
    author_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS book (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    publication_year INT,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES author(author_id)
);

-- Due to lack of time, I developed every stored procedure in this file. For a more professional
-- environment, I would use an entire folder that stores every procedure within its own sepparate
-- file

-- Create User
CREATE PROCEDURE createUser(
    IN p_username VARCHAR(255),
    IN p_email VARCHAR(255)
)
BEGIN
    INSERT INTO user (username, email) VALUES (p_username, p_email);
END //

DELIMITER ;

-- Delete User
CREATE PROCEDURE deleteUser(
    IN p_user_id INT
)
BEGIN
    DELETE FROM user WHERE user_id = p_user_id;
END //

DELIMITER ;

-- Search Users
CREATE PROCEDURE searchUsers(
    IN keyword VARCHAR(255)
)
BEGIN
    SELECT * FROM user
    WHERE username LIKE CONCAT('%', keyword, '%') OR
          email LIKE CONCAT('%', keyword, '%');
END //

DELIMITER ;

-- Create Book
CREATE PROCEDURE createBook(
    IN p_title VARCHAR(255),
    IN p_author_id INT,
    IN p_published_year INT
)
BEGIN
    INSERT INTO book (title, author_id, published_year)
    VALUES (p_title, p_author_id, p_published_year);
END //

DELIMITER ;

-- Delete Book
DELIMITER //

CREATE PROCEDURE deleteBook(
    IN p_book_id INT
)
BEGIN
    DELETE FROM book WHERE book_id = p_book_id;
END //

DELIMITER ;

-- Search Books
DELIMITER //

CREATE PROCEDURE searchBooks(
    IN keyword VARCHAR(255)
)
BEGIN
    SELECT * FROM book b
    JOIN author a ON b.author_id = a.author_id
    WHERE b.title LIKE CONCAT('%', keyword, '%') OR
          a.author_name LIKE CONCAT('%', keyword, '%');
END //

DELIMITER ;

-- Create Author
CREATE PROCEDURE createAuthor(
    IN p_author_name VARCHAR(255)
)
BEGIN
    INSERT INTO author (author_name) VALUES (p_author_name);
END //

DELIMITER ;

-- Delete Author
CREATE PROCEDURE deleteAuthor(
    IN p_author_id INT
)
BEGIN
    DELETE FROM author WHERE author_id = p_author_id;
END //

DELIMITER ;

-- Search Author
DELIMITER //

CREATE PROCEDURE searchAuthors(
    IN keyword VARCHAR(255)
)
BEGIN
    SELECT * FROM author
    WHERE author_name LIKE CONCAT('%', keyword, '%');
END //

DELIMITER ;
