-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: food_delivery_db
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery` (
  `id` int NOT NULL AUTO_INCREMENT,
  `totalprice` decimal(10,2) NOT NULL,
  `status` enum('pending','processing','completed','cancelled') DEFAULT 'pending',
  `username` varchar(255) NOT NULL,
  `useraddress` varchar(255) NOT NULL,
  `userphone` varchar(255) NOT NULL,
  `restaurantname` varchar(255) NOT NULL,
  `restaurantaddress` varchar(255) NOT NULL,
  `foodname` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery`
--

LOCK TABLES `delivery` WRITE;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
INSERT INTO `delivery` VALUES (1,500.00,'pending','ajay','chennai','9876543219','xyz hotel','teynampet','Chicken Tandoori','2024-08-20 09:44:15','2024-08-20 09:44:15'),(2,800.00,'pending','ajay','chennai','9876543219','xyz hotel','teynampet','Chicken Tikka','2024-08-20 09:44:15','2024-08-20 09:44:15'),(3,140.00,'pending','ajay','chennai','9876543219','xyz hotel','teynampet','Veg Salad','2024-08-22 07:35:59','2024-08-22 07:35:59');
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foods`
--

DROP TABLE IF EXISTS `foods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `restaurantId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `restaurantId` (`restaurantId`),
  CONSTRAINT `foods_ibfk_1` FOREIGN KEY (`restaurantId`) REFERENCES `restaurants` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foods`
--

LOCK TABLES `foods` WRITE;
/*!40000 ALTER TABLE `foods` DISABLE KEYS */;
INSERT INTO `foods` VALUES (1,'Dosai',70,'With 1 quantity',1),(2,'Biriani',250,'1kg chicken Biriani',1),(3,'Chicken Salad',150,'High in protein',2),(4,'Fried Rice',120,'Chicken Added',2),(5,'Chicken Tandoori',250,'half plate',3),(6,'Chicken Tikka',300,'Extra spicy',3),(7,'Veg Salad',70,'High Fibre',3);
/*!40000 ALTER TABLE `foods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `OrderId` int NOT NULL,
  `FoodId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `OrderId` (`OrderId`),
  KEY `FoodId` (`FoodId`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`OrderId`) REFERENCES `orders` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`FoodId`) REFERENCES `foods` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,2,500.00,1,5),(2,1,300.00,1,6),(3,2,140.00,2,7),(4,2,140.00,3,7);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `totalAmount` decimal(10,2) NOT NULL,
  `status` enum('pending','processing','completed','cancelled') DEFAULT 'pending',
  `UserId` int DEFAULT NULL,
  `RestaurantId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  KEY `RestaurantId` (`RestaurantId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`RestaurantId`) REFERENCES `restaurants` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,800.00,'pending',4,3,'2024-08-20 09:44:15','2024-08-20 09:44:15'),(2,0.00,'pending',7,3,'2024-08-22 07:34:53','2024-08-22 07:34:53'),(3,140.00,'completed',4,3,'2024-08-22 07:35:59','2024-08-22 07:45:26');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'abc hotel','nungambakkam'),(2,'fdc hotel','kodambakkam'),(3,'xyz hotel','teynampet'),(4,'zzz hotel','teynampet'),(5,'Rsp Hotel','Adyar');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `role` enum('user','admin','delivery') NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'testuser@example.com','testuser','$2b$10$eP9cE/l.0I8qRJKA99bmruNbabGCIg08ozo2bP0e8OHzV5DfhO6RG','9123456789','123 Main St, Anytown, USA','user'),(2,'abc@example.com','abc','$2b$10$mxTO.4EtwM6U5xt2c/ZgDuwRm8GkLsk0VbMnNLyg9rEwO4dfbR/AC','9123476789','123 Main St, Anytown, USA','user'),(4,'ajay@gmail.com','ajay','$2b$10$FnfdaAKu/SFUjiQXzGob3eQPKjV2aNRr3nxItZqbEzn3mfo/6gagu','9876543219','chennai','user'),(7,'admin@gmail.com','adminuser','$2b$10$BnrIaSpGUy1FIHHu6ykrKumF6HnVPpBzUs8UrDaGjf4XcjRklyCwC',NULL,NULL,'admin'),(8,'delivery@gmail.com','deliveryuser','$2b$10$9S7Fe.VZLRzMf4PfvNOLO.W1iE6R83E9ynx7lxqvqhlVaxOB04Q6e',NULL,NULL,'delivery'),(9,'saran@gmail.com','saran','$2b$10$SW.Ss7j0DwwFc5J2ohtRFux8UO0CIRzB18gTlwThd0Eo1Gfau2/qG','9123456789','ValluvarKottam','user'),(10,'kanish@gmail.com','kanish','$2b$10$6J4AdK6dV4Mz21WWToJJ9upDn51qFV.2tw4VeFj4iLQ0IAjW9ZRxG','9213456789','ValluvarKottam','user'),(11,'ghf@gmail.com','ghf','$2b$10$78PPj5NUPsMV6/.94XRJXuQ8jee1CpCA7rIuqqd4pkRPlv0Zx5gHO','9213456789','ValluvarKottam','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-30 16:00:00
