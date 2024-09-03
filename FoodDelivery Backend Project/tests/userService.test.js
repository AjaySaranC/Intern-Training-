const UserService = require('../src/services/userService');
const User = require('../src/models/User');
const logger = require('../src/logger');

jest.mock('../src/models/User'); // Mock User model
jest.mock('../src/logger'); // Mock logger

describe('UserService.createUser', () => {
  it('should create a new user successfully', async () => {
    const mockUser = { id: 1, email: 'test@example.com', username: 'testuser' };
    User.create.mockResolvedValue(mockUser);

    const user = await UserService.createUser(
      'test@example.com',
      'testuser',
      'password',
      '1234567890',
      '123 Test St'
    );

    expect(User.create).toHaveBeenCalledWith({
      email: 'test@example.com',
      username: 'testuser',
      password: 'password',
      phoneNumber: '1234567890',
      address: '123 Test St',
      role: 'user',
    });

    expect(user).toEqual(mockUser);
  });

  it('should log an error and throw an exception if user creation fails', async () => {
    const errorMessage = 'Error creating user';
    User.create.mockRejectedValue(new Error(errorMessage));

    await expect(UserService.createUser(
      'test@example.com',
      'testuser',
      'password',
      '1234567890',
      '123 Test St'
    )).rejects.toThrow(`Error creating user: ${errorMessage}`);

    expect(logger.error).toHaveBeenCalledWith(`Error creating user: ${errorMessage}`);
  });

  it('should throw an error when trying to create a user with a duplicate email', async () => {
    const errorMessage = 'Email already exists';
    User.create.mockRejectedValue(new Error(errorMessage));

    await expect(UserService.createUser(
      'test@example.com',
      'testuser',
      'password',
      '1234567890',
      '123 Test St'
    )).rejects.toThrow(`Error creating user: ${errorMessage}`);

    expect(logger.error).toHaveBeenCalledWith(`Error creating user: ${errorMessage}`);
  });

  it('should throw an error if required fields are missing', async () => {
    const errorMessage = 'Email, username, and password cannot be empty';
  
    // Test for missing email
    await expect(UserService.createUser(
      '', 
      'testuser',
      'password',
      '1234567890',
      '123 Test St'
    )).rejects.toThrow(errorMessage);
  
    // Test for missing username
    await expect(UserService.createUser(
      'test@example.com',
      '', 
      'password',
      '1234567890',
      '123 Test St'
    )).rejects.toThrow(errorMessage);
  
    // Test for missing password
    await expect(UserService.createUser(
      'test@example.com',
      'testuser',
      '', 
      '1234567890',
      '123 Test St'
    )).rejects.toThrow(errorMessage);
  
    
    expect(logger.error).toHaveBeenCalledWith(expect.stringContaining('Error creating user:'));
  });
  

  it('should assign the specified role when creating a user', async () => {
    const mockUser = { id: 1, email: 'test@example.com', username: 'testuser', role: 'admin' };
    User.create.mockResolvedValue(mockUser);

    const user = await UserService.createUser(
      'test@example.com',
      'testuser',
      'password',
      '1234567890',
      '123 Test St',
      'admin' 
    );

    expect(user.role).toBe('admin');
  });
});


describe('UserService.getAllUsers', () => {
    it('should fetch all users successfully', async () => {
        const mockUsers = [
            { email: 'test1@example.com', username: 'testuser1', phoneNumber: '1234567890', address: '123 Test St' },
            { email: 'test2@example.com', username: 'testuser2', phoneNumber: '0987654321', address: '456 Test Ave' }
        ];

        User.findAll.mockResolvedValue(mockUsers);

        const users = await UserService.getAllUsers();

        expect(User.findAll).toHaveBeenCalledWith({
            attributes: ['email', 'username', 'phoneNumber', 'address']
        });

        expect(users).toEqual(mockUsers);
    });

    it('should log an error and throw an exception if fetching users fails', async () => {
        const errorMessage = 'Error fetching users';
        User.findAll.mockRejectedValue(new Error(errorMessage));

        await expect(UserService.getAllUsers()).rejects.toThrow(`Error fetching users: ${errorMessage}`);

        expect(logger.error).toHaveBeenCalledWith(`Error fetching users: ${errorMessage}`);
    });

    it('should return an empty array when no users are found', async () => {
        User.findAll.mockResolvedValue([]);

        const users = await UserService.getAllUsers();
        
        expect(users).toEqual([]);
    });

    it('should return only specified fields', async () => {
        const mockUsers = [
            { email: 'test@example.com', username: 'testuser', phoneNumber: '1234567890', address: '123 Test St' }
        ];

        User.findAll.mockResolvedValue(mockUsers);

        const users = await UserService.getAllUsers();

        expect(users).toEqual(expect.arrayContaining([
            expect.objectContaining({ email: expect.any(String) }),
            expect.objectContaining({ username: expect.any(String) }),
        ]));
    });

});
