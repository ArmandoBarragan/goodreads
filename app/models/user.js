const crypto = require('crypto');
const secret = require('../../config/settings').SECRET_KEY;
const { dbPool } = require("../../config/db") 

class User {
    constructor(email, username) {
        this.email = email;
        this.username = username;
    }

    encriptPassword(password) {
        return password;
    }

    passwordIsValid(password) {
        return true;
    }

    setPassword(password) {
        const encryptedPassword = this.encriptPassword(password);
        this.password = encryptedPassword;
    }

    createUser() {
        return dbPool.query(
            'CALL createUser(?, ?, ?)', [this.username, this.email, this.password]
        );
    }
    
    static async searchUsers(keyword) {
        return await db.execute('CALL searchUsers(?)', [keyword]);
    }
  }
  
  module.exports = User;
  
