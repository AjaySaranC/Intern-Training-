const { body, validationResult } = require('express-validator');
const logger = require('../logger'); // Import the logger

const validateCreateOrder = [
  body('restaurantId')
    .notEmpty()
    .withMessage('Restaurant ID is required')
    .isInt({ min: 1 })
    .withMessage('Restaurant ID must be a positive integer'),

  body('items')
    .isArray()
    .withMessage('Items must be an array')
    .notEmpty()
    .withMessage('Items array cannot be empty')
    .custom((items) => {
      if (!items.every(item => item.hasOwnProperty('foodId') && item.hasOwnProperty('quantity'))) {
        throw new Error('Each item must have foodId and quantity properties');
      }
      if (!items.every(item => item.quantity > 0)) {
        throw new Error('Each item quantity must be a positive integer');
      }
      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error(`Validation errors for create order: ${JSON.stringify(errors.array())}`); // Log the validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateUpdateOrderStatus = [
  body('orderId')
    .notEmpty()
    .withMessage('Order ID is required')
    .isInt({ min: 1 })
    .withMessage('Order ID must be a positive integer'),

  body('status')
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['pending', 'completed', 'canceled']) 
    .withMessage('Status must be one of the following: pending, completed, canceled'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error(`Validation errors for update order status: ${JSON.stringify(errors.array())}`); // Log the validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateCreateOrder,
  validateUpdateOrderStatus
};
