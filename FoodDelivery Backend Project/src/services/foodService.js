// services/foodService.js
const Food = require('../models/Food');
const logger = require('../logger'); // Import the logger

class FoodService {
  async createFood(name, price, description, restaurantId) {
    try {
      const food = await Food.create({ name, price, description, restaurantId });
      return food;
    } catch (error) {
      logger.error(`Error creating food item: ${error.message}`); // Log the error
      throw new Error(`Error creating food item: ${error.message}`);
    }
  }

  async updateFood(id, updates) {
    try {
      const food = await Food.findByPk(id);
      if (food) {
        return await food.update(updates);
      }
      return null;
    } catch (error) {
      logger.error(`Error updating food item: ${error.message}`); // Log the error
      throw new Error(`Error updating food item: ${error.message}`);
    }
  }

  async getFoods(restaurantId) {
    if (restaurantId === null || typeof parseInt(restaurantId) !== 'number') {
      throw new Error('Invalid restaurantId'); // Throw an error for invalid restaurantId
    }
    try {
      console.log(typeof restaurantId);
      return await Food.findAll({ where: { restaurantId } });
    } catch (error) {
      logger.error(`Error fetching food items: ${error.message}`); // Log the error
      throw new Error(`Error fetching food items: ${error.message}`);
    }
  }
}

module.exports = new FoodService();
