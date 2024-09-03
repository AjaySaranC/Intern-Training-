const OrderService = require('../src/services/orderService');
const Order = require('../src/models/Order');
const OrderItem = require('../src/models/OrderItem');
const Delivery = require('../src/models/Delivery');
const User = require('../src/models/User');
const Restaurant = require('../src/models/Restaurant');
const Food = require('../src/models/Food');

jest.mock('../src/models/Order', () => {
  return {
    findByPk: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(() => ({
      save: jest.fn(),
    })),
    belongsTo: jest.fn(),
  };
});

jest.mock('../src/models/OrderItem', () => ({
  create: jest.fn(),
}));

jest.mock('../src/models/Delivery', () => ({
  create: jest.fn(),
  findAll: jest.fn(),
}));

jest.mock('../src/models/User', () => ({
  findByPk: jest.fn(),
}));

jest.mock('../src/models/Restaurant', () => ({
  findByPk: jest.fn(),
}));

jest.mock('../src/models/Food', () => ({
  findByPk: jest.fn(),
}));

describe('OrderService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createOrder', () => {
    it('should create an order and return success', async () => {
      const userId = 1;
      const restaurantId = 1;
      const items = [{ foodId: 1, quantity: 2 }];

      const mockUser = { id: userId, username: 'testuser', address: '123 Main St', phoneNumber: '123-456-7890' };
      const mockRestaurant = { id: restaurantId, name: 'Test Restaurant', address: '456 Elm St' };
      const mockFood = { id: 1, name: 'Pizza', price: 10.00 };

      User.findByPk.mockResolvedValue(mockUser);
      Restaurant.findByPk.mockResolvedValue(mockRestaurant);
      Food.findByPk.mockResolvedValue(mockFood);

      const mockOrder = {
        id: 1,
        userId,
        restaurantId,
        totalAmount: 0,
        save: jest.fn().mockResolvedValue(true),
      };
      Order.create.mockResolvedValue(mockOrder);

      const result = await OrderService.createOrder(userId, restaurantId, items);

      expect(result.success).toBe(true);
      expect(Order.create).toHaveBeenCalledWith({ userId, restaurantId, totalAmount: 0 });
      expect(OrderItem.create).toHaveBeenCalledTimes(1);
      expect(Delivery.create).toHaveBeenCalledTimes(1);
      expect(mockOrder.save).toHaveBeenCalled();
    });

    it('should return an error if user is not found', async () => {
      const userId = 1;
      const restaurantId = 1;
      const items = [{ foodId: 1, quantity: 2 }];

      User.findByPk.mockResolvedValue(null);

      const result = await OrderService.createOrder(userId, restaurantId, items);

      expect(result.success).toBe(false);
      expect(result.error).toBe(`User with id ${userId} not found`);
    });

    it('should return an error if restaurant is not found', async () => {
      const userId = 1;
      const restaurantId = 1;
      const items = [{ foodId: 1, quantity: 2 }];

      User.findByPk.mockResolvedValue({ id: userId });
      Restaurant.findByPk.mockResolvedValue(null);

      const result = await OrderService.createOrder(userId, restaurantId, items);

      expect(result.success).toBe(false);
      expect(result.error).toBe(`Restaurant with id ${restaurantId} not found`);
    });

    it('should return an error if food item is not found', async () => {
      const userId = 1;
      const restaurantId = 1;
      const items = [{ foodId: 1, quantity: 2 }];

      User.findByPk.mockResolvedValue({ id: userId });
      Restaurant.findByPk.mockResolvedValue({ id: restaurantId });
      Food.findByPk.mockResolvedValue(null);

      const result = await OrderService.createOrder(userId, restaurantId, items);

      expect(result.success).toBe(false);
      expect(result.error).toBe(`Food item with id ${items[0].foodId} not found`);
    });

    it('should handle errors during order creation', async () => {
      const userId = 1;
      const restaurantId = 1;
      const items = [{ foodId: 1, quantity: 2 }];

      User.findByPk.mockResolvedValue({ id: userId });
      Restaurant.findByPk.mockResolvedValue({ id: restaurantId });
      Food.findByPk.mockResolvedValue({ id: 1, price: 10 });
      Order.create.mockRejectedValue(new Error('Database error'));

      const result = await OrderService.createOrder(userId, restaurantId, items);

      expect(result.success).toBe(false);
      expect(result.error).toBe('Database error');
    });

  });

  describe('getOrdersByUser', () => {
    it('should fetch orders for a user', async () => {
      const userId = 1;
      const mockOrders = [
        { id: 1, userId: 1, restaurantId: 1, totalAmount: 20 },
        { id: 2, userId: 1, restaurantId: 2, totalAmount: 30 },
      ];

      Order.findAll.mockResolvedValue(mockOrders);

      const result = await OrderService.getOrdersByUser(userId);

      expect(result.success).toBe(true);
      expect(result.orders).toEqual(mockOrders);
      expect(Order.findAll).toHaveBeenCalledWith({ where: { userId } });
    });

    it('should return an empty array if user has no orders', async () => {
      const userId = 1;
      Order.findAll.mockResolvedValue([]);

      const result = await OrderService.getOrdersByUser(userId);

      expect(result.success).toBe(true);
      expect(result.orders).toEqual([]);
    });

    it('should handle database errors', async () => {
      const userId = 1;
      Order.findAll.mockRejectedValue(new Error('Database error'));

      const result = await OrderService.getOrdersByUser(userId);

      expect(result.success).toBe(false);
      expect(result.error).toBe('Database error');
    });

    it('should return orders with associated items', async () => {
      const userId = 1;
      const mockOrders = [
        { id: 1, userId: 1, restaurantId: 1, totalAmount: 20, OrderItems: [{ id: 1, foodId: 1, quantity: 2 }] },
      ];

      Order.findAll.mockResolvedValue(mockOrders);

      const result = await OrderService.getOrdersByUser(userId);

      expect(result.success).toBe(true);
      expect(result.orders[0].OrderItems).toBeDefined();
      expect(result.orders[0].OrderItems.length).toBe(1);
    });

    it('should handle order history without login ', async () => {
      
      const result = await OrderService.getOrdersByUser();

      expect(result.success).toBe(false);
      expect(result.error).toBe('User not logged in');
    });

  });

  describe('getOrders', () => {
    it('should fetch all delivery orders', async () => {
      const mockDeliveries = [
        { id: 1, totalprice: 20, status: 'pending' },
        { id: 2, totalprice: 30, status: 'completed' },
      ];

      Delivery.findAll.mockResolvedValue(mockDeliveries);

      const result = await OrderService.getOrders();

      expect(result.success).toBe(true);
      expect(result.order).toEqual(mockDeliveries);
      expect(Delivery.findAll).toHaveBeenCalled();
    });

    it('should return an empty array if there are no orders', async () => {
      Delivery.findAll.mockResolvedValue([]);

      const result = await OrderService.getOrders();

      expect(result.success).toBe(true);
      expect(result.order).toEqual([]);
    });

    it('should handle database errors', async () => {
      Delivery.findAll.mockRejectedValue(new Error('Database error'));

      const result = await OrderService.getOrders();

      expect(result.success).toBe(false);
      expect(result.error).toBe('Database error');
    });

    
  });

  describe('updateOrderStatus', () => {
    it('should update the order status', async () => {
      const orderId = 1;
      const newStatus = 'completed';
      const mockOrder = {
        id: orderId,
        status: 'pending',
        save: jest.fn().mockResolvedValue(true),
      };

      Order.findByPk.mockResolvedValue(mockOrder);

      const result = await OrderService.updateOrderStatus(orderId, newStatus);

      expect(result.success).toBe(true);
      expect(result.order.status).toBe(newStatus);
      expect(Order.findByPk).toHaveBeenCalledWith(orderId);
      expect(mockOrder.save).toHaveBeenCalled();
    });

    it('should return an error if order is not found', async () => {
      const orderId = 1;
      const newStatus = 'completed';

      Order.findByPk.mockResolvedValue(null);

      const result = await OrderService.updateOrderStatus(orderId, newStatus);

      expect(result.success).toBe(false);
      expect(result.error).toBe('Order not found');
    });

    

    it('should handle database errors during save', async () => {
      const orderId = 1;
      const newStatus = 'completed';
      const mockOrder = {
        id: orderId,
        status: 'pending',
        save: jest.fn().mockRejectedValue(new Error('Database error')),
      };

      Order.findByPk.mockResolvedValue(mockOrder);

      const result = await OrderService.updateOrderStatus(orderId, newStatus);

      expect(result.success).toBe(false);
      expect(result.error).toBe('Database error');
    });

  });


});