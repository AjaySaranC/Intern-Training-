// services/orderService.js
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Food = require('../models/Food');
const Delivery = require('../models/Delivery');
const User = require('../models/User');
const Restaurant = require('../models/Restaurant');
const logger = require('../logger'); 

class OrderService {
  async createOrder(userId, restaurantId, items) {
    try {
      let totalAmount = 0;
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error(`User with id ${userId} not found`);
      }

      const restaurant = await Restaurant.findByPk(restaurantId);
      if (!restaurant) {
        throw new Error(`Restaurant with id ${restaurantId} not found`);
      }

      const order = await Order.create({ userId, restaurantId, totalAmount });

      for (const item of items) {
        const food = await Food.findByPk(item.foodId);
        if (!food) {
          throw new Error(`Food item with id ${item.foodId} not found`);
        }
        const price = food.price * item.quantity;
        totalAmount += price;
        const delivery_amount = totalAmount+50;
        await OrderItem.create({
          orderId: order.id,
          foodId: item.foodId,
          quantity: item.quantity,
          price
        });

        await Delivery.create({
          totalprice: delivery_amount,
          status: 'pending',
          username: user.username,
          useraddress: user.address,
          userphone: user.phoneNumber,
          restaurantname: restaurant.name,
          restaurantaddress: restaurant.address,
          foodname: food.name,
          quantity: item.quantity
        });
      }

      order.totalAmount = totalAmount;
      await order.save();

      return { success: true, order };
    } catch (error) {
      logger.error(`Error creating order: ${error.message}`); // Log the error
      return { success: false, error: error.message };
    }
  }

  async getOrdersByUser(userId) {
    try {

      if (!userId) {
        return { success: false, error: 'User not logged in' };
      }
      
      console.log("Fetching orders for userId:", userId);
      const orders = await Order.findAll({
        where: { userId },
      });
      console.log("Orders fetched:", orders);
      return { success: true, orders };
    } catch (error) {
      logger.error(`Error fetching orders: ${error.message}`); // Log the error
      return { success: false, error: error.message };
    }
  }

  async getOrders() {
    try {
      const order = await Delivery.findAll();
      return { success: true, order };
    } catch (error) {
      logger.error(`Error fetching all orders: ${error.message}`); // Log the error
      return { success: false, error: error.message };
    }
  }

  async updateOrderStatus(orderId, status) {
    try {
      const order = await Order.findByPk(orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      order.status = status;
      await order.save();
      return { success: true, order };
    } catch (error) {
      logger.error(`Error updating order status: ${error.message}`); // Log the error
      return { success: false, error: error.message };
    }
  }
}

module.exports = new OrderService();
