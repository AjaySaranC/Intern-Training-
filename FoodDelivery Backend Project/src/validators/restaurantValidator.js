const { body, validationResult } = require('express-validator');
const logger = require('../logger'); // Import the logger

const validateRestaurant = [
  body('name')
    .notEmpty()
    .withMessage('Restaurant name is required')
    .isLength({ max: 30 })
    .withMessage('Restaurant name must be less than 30 characters'),

  body('address')
    .notEmpty()
    .withMessage('Restaurant address is required')
    .isLength({ max: 50 })
    .withMessage('Restaurant address must be less than 50 characters'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error(`Validation errors: ${JSON.stringify(errors.array())}`); // Log the validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateRestaurant
};
