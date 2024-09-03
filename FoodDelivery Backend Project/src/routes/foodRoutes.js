const express = require('express');
const foodController = require('../controllers/foodController');
const { verifyToken } = require('../middleware/jwtMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');
const { validateFood, validateUpdateFood } = require('../validators/foodValidator'); // Import the validators

const router = express.Router();

router.post('/foods', verifyToken, checkRole('admin'), validateFood, foodController.createFood);
router.put('/foods/:id', verifyToken, checkRole('admin'), validateUpdateFood, foodController.updateFood);
router.get('/foods', foodController.getFoods);

module.exports = router;
