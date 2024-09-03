const User = require('../models/User');
const logger = require('../logger');

class UserService {
  async createUser(email, username, password, phoneNumber, address ,role='user') {
    if (!email || !username || !password) {
      throw new Error('Email, username, and password cannot be empty');
    }
    try {
      const user = await User.create({ email, username, password, phoneNumber, address ,role });
      return user;
    } catch (error) {
      logger.error(`Error creating user: ${error.message}`);
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  async getAllUsers() {
    try {
      const users = await User.findAll({
        attributes: ['email', 'username', 'phoneNumber', 'address']
      });
      return users;
    } catch (error) {
      logger.error(`Error fetching users: ${error.message}`);
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }


}

module.exports = new UserService();
