const express = require('express');
const orderController = require('../controllers/orderController');
const { verifyToken } = require('../middleware/jwtMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');
const { validateCreateOrder, validateUpdateOrderStatus } = require('../validators/orderValidator');

const router = express.Router();

router.post('/orders', verifyToken, validateCreateOrder, orderController.createOrder);
router.get('/orders', verifyToken, orderController.getUserOrders);

// Allow both 'admin' and 'delivery' roles to access the /delivery route
router.get('/delivery', verifyToken, checkRole(['admin', 'delivery']), orderController.getOrders);
router.put('/orders/status', verifyToken, validateUpdateOrderStatus, checkRole('admin'), orderController.updateOrderStatus);

module.exports = router;
