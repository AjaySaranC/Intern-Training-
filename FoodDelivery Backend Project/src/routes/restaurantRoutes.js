const express = require('express');
const restaurantController = require('../controllers/restaurantController');
const { verifyToken } = require('../middleware/jwtMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');
const { validateRestaurant } = require('../validators/restaurantValidator'); // Import the validator

const router = express.Router();

router.post('/restaurants', verifyToken, checkRole('admin'), validateRestaurant, restaurantController.createRestaurant);
router.get('/restaurants', restaurantController.getRestaurants);

module.exports = router;
