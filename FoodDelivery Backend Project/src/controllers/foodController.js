const foodService = require('../services/foodService');
const logger = require('../logger'); 

exports.createFood = async (req, res) => {
  try {
    const { name, price, description, restaurantId } = req.body;
    const food = await foodService.createFood(name, price, description, restaurantId);
    res.status(201).json({ message: 'Food item created successfully', food });
  } catch (error) {
    logger.error(`Error creating food item: ${error.message}`);
    res.status(500).json({ message: 'Error creating food item', error: error.message });
  }
};

exports.updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description } = req.body;
    const updatedFood = await foodService.updateFood(id, { name, price, description });
    
    if (updatedFood) {
      res.status(200).json({ message: 'Food item updated successfully', food: updatedFood });
    } else {
      logger.error(`Error updating food item: Food item with ID ${id} not found`);
      res.status(404).json({ message: 'Food item not found' });
    }
  } catch (error) {
    logger.error(`Error updating food item: ${error.message}`);
    res.status(500).json({ message: 'Error updating food item', error: error.message });
  }
};

exports.getFoods = async (req, res) => {
  try {
    const { restaurantId } = req.query;
    const foods = await foodService.getFoods(restaurantId);
    res.status(200).json(foods);
  } catch (error) {
    logger.error(`Error fetching food items: ${error.message}`);
    res.status(500).json({ message: 'Error fetching food items', error: error.message });
  }
};
