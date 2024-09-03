// src/controllers/userController.js
const userService = require('../services/userService');
const logger = require('../logger');

exports.createUser = async (req, res) => {
  try {
    const { email, username, password, phoneNumber, address ,role } = req.body;
    const user = await userService.createUser(email, username, password, phoneNumber, address ,role);
    res.status(201).json({ message: 'User created successfully', userId: user.id });
  } catch (error) {
    logger.error(`Error in createUser controller: ${error.message}`);
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    logger.error(`Error in getUsers controller: ${error.message}`);
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};
