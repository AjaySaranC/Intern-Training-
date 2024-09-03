const { body, validationResult } = require('express-validator');
const logger = require('../logger');

const validateUser = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('phoneNumber').optional().isMobilePhone().withMessage('Invalid phone number'),
  body('address').optional().isLength({ max: 255 }).withMessage('Address can be up to 255 characters long'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.error(`Validation errors: ${JSON.stringify(errors.array())}`);
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateUser,
  handleValidationErrors
};
