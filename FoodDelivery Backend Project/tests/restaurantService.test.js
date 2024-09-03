const restaurantService = require('../src/services/restaurantService');
const Restaurant = require('../src/models/Restaurant'); // Mock this model
const logger = require('../src/logger');

jest.mock('../src/models/Restaurant');
jest.mock('../src/logger');

describe('RestaurantService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createRestaurant', () => {
    it('should create a new restaurant successfully', async () => {
     
      const restaurantData = { name: 'Test Restaurant', address: '123 Test St' };
      Restaurant.create.mockResolvedValue(restaurantData);

      const result = await restaurantService.createRestaurant('Test 2 Restaurant', '321 abc street');

      expect(result.success).toBe(true);
      expect(result.restaurant).toEqual(restaurantData);
    });

    it('should log an error and return an error message if creation fails', async () => {
      
      const errorMessage = 'Creation failed';
      Restaurant.create.mockRejectedValue(new Error(errorMessage));

      const result = await restaurantService.createRestaurant('Test Restaurant', '123 Test St');

      expect(result.success).toBe(false);
      expect(result.error).toBe(errorMessage);
      expect(logger.error).toHaveBeenCalledWith(`Error creating restaurant: ${errorMessage}`);
    });

    it('should not allow creation of a restaurant with missing name', async () => {
      
      const errorMessage = 'Validation failed: Name is required';
      Restaurant.create.mockImplementation(() => {
        throw new Error(errorMessage);
      });

      const result = await restaurantService.createRestaurant('', '123 Test St');

      expect(result.success).toBe(false);
      expect(result.error).toBe(errorMessage);
      expect(logger.error).toHaveBeenCalledWith(`Error creating restaurant: ${errorMessage}`);
    });

    it('should not allow creation of a restaurant with missing address', async () => {
    
      const errorMessage = 'Validation failed: Address is required';
      Restaurant.create.mockImplementation(() => {
        throw new Error(errorMessage);
      });

    
      const result = await restaurantService.createRestaurant('Test Restaurant', '');

      expect(result.success).toBe(false);
      expect(result.error).toBe(errorMessage);
      expect(logger.error).toHaveBeenCalledWith(`Error creating restaurant: ${errorMessage}`);
    });

    it('should handle unexpected errors during creation', async () => {
     
      const unexpectedError = new Error('Unexpected error');
      Restaurant.create.mockRejectedValue(unexpectedError);

      const result = await restaurantService.createRestaurant('Test Restaurant', '123 Test St');

      expect(result.success).toBe(false);
      expect(result.error).toBe(unexpectedError.message);
      expect(logger.error).toHaveBeenCalledWith(`Error creating restaurant: ${unexpectedError.message}`);
    });
  });

  describe('getRestaurants', () => {
    it('should fetch all restaurants successfully', async () => {
     
      const restaurantList = [{ name: 'Restaurant 1', address: 'Address 1' }];
      Restaurant.findAll.mockResolvedValue(restaurantList);

      const result = await restaurantService.getRestaurants();

      expect(result.success).toBe(true);
      expect(result.restaurants).toEqual(restaurantList);
    });

    it('should log an error and return an error message if fetching fails', async () => {
    
      const errorMessage = 'Fetching failed';
      Restaurant.findAll.mockRejectedValue(new Error(errorMessage));

      const result = await restaurantService.getRestaurants();

      expect(result.success).toBe(false);
      expect(result.error).toBe(errorMessage);
      expect(logger.error).toHaveBeenCalledWith(`Error fetching restaurants: ${errorMessage}`);
    });

    it('should return an empty array when no restaurants are found', async () => {
     
      Restaurant.findAll.mockResolvedValue([]);

      const result = await restaurantService.getRestaurants();

      expect(result.success).toBe(true);
      expect(result.restaurants).toEqual([]);
    });

    it('should return restaurants with the correct attributes', async () => {
     
      const restaurantList = [
        { name: 'Restaurant 1', address: 'Address 1' },
        { name: 'Restaurant 2', address: 'Address 2' }
      ];
      Restaurant.findAll.mockResolvedValue(restaurantList);

      const result = await restaurantService.getRestaurants();

      expect(result.success).toBe(true);
      expect(result.restaurants).toHaveLength(2);
      expect(result.restaurants).toEqual(restaurantList);
    });

    it('should handle unexpected errors during fetching', async () => {
     
      const unexpectedError = new Error('Unexpected error');
      Restaurant.findAll.mockRejectedValue(unexpectedError);

      const result = await restaurantService.getRestaurants();

      expect(result.success).toBe(false);
      expect(result.error).toBe(unexpectedError.message);
      expect(logger.error).toHaveBeenCalledWith(`Error fetching restaurants: ${unexpectedError.message}`);
    });
  });
});
