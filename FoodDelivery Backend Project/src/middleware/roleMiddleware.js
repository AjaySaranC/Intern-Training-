const User = require('../models/User');

const checkRole = (roles) => {
  return async (req, res, next) => {
    try {
      const user = await User.findByPk(req.userId);
      if (!roles.includes(user.role)) {
        return res.status(403).json({ message: 'Access denied.' });
      }
      next();
    } catch (error) {
      res.status(500).json({ message: 'Error checking user role', error: error.message });
    }
  };
};

module.exports = {
  checkRole
};
