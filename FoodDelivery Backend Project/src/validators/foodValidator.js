const { body, validationResult } = require('express-validator');
const logger = require('../logger'); // Import the logger

const validateFood = [
  body('name')
    .notEmpty()
    .withMessage('Food name is required')
    .isLength({ max: 100 })
    .withMessage('Food name must be less than 100 characters'),

  body('price')
    .notEmpty()
    .withMessage('Price is required')
    .isInt({ min: 1 })
    .withMessage('Price must be a positive integer'),

  body('description')
    .optional()
    .isLength({ max: 255 })
    .withMessage('Description must be less than 255 characters'),

  body('restaurantId')
    .notEmpty()
    .withMessage('Restaurant ID is required')
    .isInt({ min: 1 })
    .withMessage('Restaurant ID must be a positive integer'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error(`Validation errors for create food: ${JSON.stringify(errors.array())}`); // Log the validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateUpdateFood = [
  body('name')
    .optional()
    .isLength({ max: 100 })
    .withMessage('Food name must be less than 100 characters'),

  body('price')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Price must be a positive integer'),

  body('description')
    .optional()
    .isLength({ max: 255 })
    .withMessage('Description must be less than 255 characters'),

  body('restaurantId')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Restaurant ID must be a positive integer'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error(`Validation errors for update food: ${JSON.stringify(errors.array())}`); // Log the validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateFood,
  validateUpdateFood
};
