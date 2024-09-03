const restaurantService = require('../services/restaurantService');
const logger = require('../logger'); 

exports.createRestaurant = async (req, res) => {
  try {
    const { name, address } = req.body;
    const result = await restaurantService.createRestaurant(name, address);
    
    if (result.success) {
      res.status(201).json({ message: 'Restaurant created successfully', restaurant: result.restaurant });
    } else {
      logger.error(`Error creating restaurant: ${result.error}`);
      res.status(500).json({ message: 'Error creating restaurant', error: result.error });
    }
  } catch (error) {
    logger.error(`Error creating restaurant: ${error.message}`);
    res.status(500).json({ message: 'Error creating restaurant', error: error.message });
  }
};

exports.getRestaurants = async (req, res) => {
  try {
    const result = await restaurantService.getRestaurants();
    
    if (result.success) {
      res.status(200).json(result.restaurants);
    } else {
      logger.error(`Error fetching restaurants: ${result.error}`);
      res.status(500).json({ message: 'Error fetching restaurants', error: result.error });
    }
  } catch (error) {
    logger.error(`Error fetching restaurants: ${error.message}`);
    res.status(500).json({ message: 'Error fetching restaurants', error: error.message });
  }
};
