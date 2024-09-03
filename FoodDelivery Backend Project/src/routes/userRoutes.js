const express = require('express');
const userController = require('../controllers/userController');
const { validateUser, handleValidationErrors } = require('../validators/userValidator');
const { passport, generateToken } = require('../config/passport');
const { verifyToken } = require('../middleware/jwtMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');

const router = express.Router();


router.post('/users', validateUser, handleValidationErrors, userController.createUser);
router.get('/users', verifyToken,checkRole('admin'),userController.getUsers);

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.status(401).json({ message: info.message });
  
      const token = generateToken(user);
      res.status(200).json({ message: 'Login successful', token });
    })(req, res, next);
  });
  
module.exports = router;
