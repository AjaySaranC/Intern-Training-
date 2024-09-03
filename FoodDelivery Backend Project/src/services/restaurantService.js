// services/restaurantService.js
const Restaurant = require('../models/Restaurant');
const logger = require('../logger');

exports.createRestaurant = async (name, address) => {
  try {
    const restaurant = await Restaurant.create({ name, address });
    return { success: true, restaurant };
  } catch (error) {
    logger.error(`Error creating restaurant: ${error.message}`);
    return { success: false, error: error.message };
  }
};

exports.getRestaurants = async () => {
  try {
    const restaurants = await Restaurant.findAll();
    return { success: true, restaurants };
  } catch (error) {
    logger.error(`Error fetching restaurants: ${error.message}`);
    return { success: false, error: error.message };
  }
};
