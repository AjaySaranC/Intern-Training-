const orderService = require('../services/orderService');
const logger = require('../logger'); 

exports.createOrder = async (req, res) => {
  try {
    const { restaurantId, items } = req.body;
    const result = await orderService.createOrder(req.userId, restaurantId, items);
    
    if (result.success) {
      res.status(201).json({ message: 'Order created successfully', order: result.order });
    } else {
      logger.error(`Error creating order: ${result.error}`);
      res.status(500).json({ message: 'Error creating order', error: result.error });
    }
  } catch (error) {
    logger.error(`Error creating order: ${error.message}`);
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const result = await orderService.getOrdersByUser(req.userId);
    
    if (result.success) {
      res.status(200).json(result.orders);
    } else {
      logger.error(`Error fetching user orders: ${result.error}`);
      res.status(500).json({ message: 'Error fetching orders', error: result.error });
    }
  } catch (error) {
    logger.error(`Error fetching user orders: ${error.message}`);
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const result = await orderService.getOrders(req.userId);
    
    if (result.success) {
      res.status(200).json(result.order);
    } else {
      logger.error(`Error fetching orders: ${result.error}`);
      res.status(500).json({ message: 'Error fetching orders', error: result.error });
    }
  } catch (error) {
    logger.error(`Error fetching orders: ${error.message}`);
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
}; 

exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    const result = await orderService.updateOrderStatus(orderId, status);
    
    if (result.success) {
      res.status(200).json({ message: 'Order status updated successfully', order: result.order });
    } else {
      logger.error(`Error updating order status: ${result.error}`);
      res.status(500).json({ message: 'Error updating order status', error: result.error });
    }
  } catch (error) {
    logger.error(`Error updating order status: ${error.message}`);
    res.status(500).json({ message: 'Error updating order status', error: error.message });
  }
};
