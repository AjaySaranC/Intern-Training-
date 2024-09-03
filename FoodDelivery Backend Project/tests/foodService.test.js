const FoodService = require('../src/services/foodService');
const Food = require('../src/models/Food');
const logger = require('../src/logger');

jest.mock('../src/models/Food'); // Mock the Food model
jest.mock('../src/logger'); // Mock the logger

describe('FoodService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createFood', () => {
    it('should create a food item successfully', async () => {
      const foodData = { name: 'Pizza', price: 10.99, description: 'Delicious cheese pizza', restaurantId: 1 };
      Food.create.mockResolvedValue(foodData);

      const result = await FoodService.createFood('Pizza', 10.99, 'Delicious cheese pizza', 1);

      expect(result).toEqual(foodData);
    });

    it('should log an error and throw if creation fails', async () => {
      const errorMessage = 'Creation failed';
      Food.create.mockRejectedValue(new Error(errorMessage));

      await expect(FoodService.createFood('Pizza', 10.99, 'Delicious cheese pizza', 1)).rejects.toThrow(`Error creating food item: ${errorMessage}`);
      expect(logger.error).toHaveBeenCalledWith(`Error creating food item: ${errorMessage}`);
    });

    it('should throw an error if name is missing', async () => {
      await expect(FoodService.createFood('', 10.99, 'Delicious cheese pizza', 1)).rejects.toThrow();
    });

    it('should throw an error if price is invalid', async () => {
      await expect(FoodService.createFood('Pizza', -5, 'Delicious cheese pizza', 1)).rejects.toThrow();
    });

    it('should throw an error if restaurantId is invalid', async () => {
      await expect(FoodService.createFood('Pizza', 10.99, 'Delicious cheese pizza', null)).rejects.toThrow();
    });

    it('should throw an error if restaurantId does not exist in the database', async () => {
      const errorMessage = 'Foreign key constraint fails';
      Food.create.mockRejectedValue(new Error(errorMessage));

      await expect(FoodService.createFood('Pizza', 10.99, 'Delicious cheese pizza', 9999)).rejects.toThrow(`Error creating food item: ${errorMessage}`);
      expect(logger.error).toHaveBeenCalledWith(`Error creating food item: ${errorMessage}`);
    });
  });

  describe('updateFood', () => {
    it('should update a food item successfully', async () => {
        const foodItem = { 
          name: 'Pizza', 
          price: 10.99, 
          description: 'Delicious cheese pizza', 
          restaurantId: 1, 
          update: jest.fn().mockResolvedValue({ 
            name: 'Pizza', 
            price: 12.99, 
            description: 'Delicious cheese pizza', 
            restaurantId: 1 
          }) // Mock the updated food item
        };
        Food.findByPk.mockResolvedValue(foodItem);
        const updates = { price: 12.99 }; // Only updating the price
      
        const result = await FoodService.updateFood(1, updates);
        expect(foodItem.update).toHaveBeenCalledWith(updates);
         expect(result).toEqual({ 
          name: 'Pizza', 
          price: 12.99, 
          description: 'Delicious cheese pizza', 
          restaurantId: 1 
        }); // Check if result reflects the updated item
      });
      

    it('should return null if food item does not exist', async () => {
      Food.findByPk.mockResolvedValue(null);

      const result = await FoodService.updateFood(1, { price: 12.99 });

      expect(result).toBeNull();
    });

    it('should log an error and throw if updating fails', async () => {
      const errorMessage = 'Update failed';
      Food.findByPk.mockResolvedValue({ update: jest.fn().mockRejectedValue(new Error(errorMessage)) });

      await expect(FoodService.updateFood(1, { price: 12.99 })).rejects.toThrow(`Error updating food item: ${errorMessage}`);
      expect(logger.error).toHaveBeenCalledWith(`Error updating food item: ${errorMessage}`);
    });

    it('should throw an error if updates are invalid', async () => {
      await expect(FoodService.updateFood(1, { price: -5 })).rejects.toThrow();
    });

    it('should throw an error if id is invalid', async () => {
      await expect(FoodService.updateFood(null, { price: 12.99 })).rejects.toThrow();
    });
  });

  describe('getFoods', () => {
    it('should fetch food items successfully', async () => {
      const mockFoods = [
        { name: 'Pizza', price: 10.99, description: 'Delicious cheese pizza', restaurantId: 1 },
        { name: 'Burger', price: 8.99, description: 'Juicy beef burger', restaurantId: 1 },
      ];
      Food.findAll.mockResolvedValue(mockFoods);

      const result = await FoodService.getFoods(1);

      expect(result).toEqual(mockFoods);
    });

    it('should log an error and throw if fetching fails', async () => {
      const errorMessage = 'Fetching failed';
      Food.findAll.mockRejectedValue(new Error(errorMessage));

      await expect(FoodService.getFoods(1)).rejects.toThrow(`Error fetching food items: ${errorMessage}`);
      expect(logger.error).toHaveBeenCalledWith(`Error fetching food items: ${errorMessage}`);
    });

    it('should return an empty array when no food items are found', async () => {
      Food.findAll.mockResolvedValue([]);

      const result = await FoodService.getFoods(1);

      expect(result).toEqual([]);
    });

    it('should throw an error if restaurantId is invalid', async () => {
        await expect(FoodService.getFoods(null)).rejects.toThrow('Invalid restaurantId');
      });
  
      it('should throw an error if restaurantId is not a number', async () => {
        await expect(FoodService.getFoods('invalid')).rejects.toThrow('Invalid restaurantId');
      });
  });
});
