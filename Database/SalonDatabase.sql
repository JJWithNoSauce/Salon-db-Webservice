CREATE DATABASE  IF NOT EXISTS `salondb_kku` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `salondb_kku`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: salondb_kku
-- ------------------------------------------------------
-- Server version	5.5.5-10.11.6-MariaDB-0+deb12u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Customer`
--

DROP TABLE IF EXISTS `Customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Customer` (
  `cus_phone` varchar(10) NOT NULL,
  `cus_name` varchar(20) NOT NULL,
  PRIMARY KEY (`cus_phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customer`
--

LOCK TABLES `Customer` WRITE;
/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
INSERT INTO `Customer` VALUES ('0222946044','สันติ'),('0231880655','สุขใจ'),('0243772942','สุขสันข์'),('024670214','สุขขี'),('0619651785','เจเจ'),('0906453245','จักรชัย'),('0906454637','สุชัย'),('0906563245','โสภา'),('0987654321','นาย มากมาย แสนสวยงาม');
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Employee`
--

DROP TABLE IF EXISTS `Employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Employee` (
  `em_id` int(3) NOT NULL,
  `em_name` varchar(30) NOT NULL,
  `em_address` varchar(50) NOT NULL,
  `em_phone` varchar(10) NOT NULL,
  `em_email` varchar(20) NOT NULL,
  `isadmin` tinyint(1) NOT NULL,
  PRIMARY KEY (`em_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employee`
--

LOCK TABLES `Employee` WRITE;
/*!40000 ALTER TABLE `Employee` DISABLE KEYS */;
INSERT INTO `Employee` VALUES (1,'ครวญ','17 หมู่ 2 ต.โคกก่อ อ.เมือง จ.มหาสารคาม','0984523485','khrw888@gmail.com',1),(2,'คล้าย','144 ต.โสกนกเต็น อ.พล จ.ขอนแก่น','0864726518','khly777@gmail.com',1),(3,'แคล้ว','367 ถ.กลางเมือง ต.ในเมือง อ.เมืองขอนแก่น จ.ขอนแก่น','0875612589','khaew258@gmail.com',1),(4,'เคลิ้ม','122 ต.ท่าหินโงม อ.เมืองชัยภูมิ จ.ชัยภูมิ','0977452337','someboy@gmail.com',1),(5,'อาราฮัม รันคอน','อาเมริกาเย้','0987653321','Araham@america.com',1);
/*!40000 ALTER TABLE `Employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EmployeeSkill`
--

DROP TABLE IF EXISTS `EmployeeSkill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EmployeeSkill` (
  `em_id` int(3) NOT NULL,
  `service_id` int(3) NOT NULL,
  PRIMARY KEY (`em_id`,`service_id`),
  KEY `FK_Service_EmployeeSkill` (`service_id`),
  CONSTRAINT `FK_Employee_EmployeeSkill` FOREIGN KEY (`em_id`) REFERENCES `Employee` (`em_id`),
  CONSTRAINT `FK_Service_EmployeeSkill` FOREIGN KEY (`service_id`) REFERENCES `Service` (`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EmployeeSkill`
--

LOCK TABLES `EmployeeSkill` WRITE;
/*!40000 ALTER TABLE `EmployeeSkill` DISABLE KEYS */;
INSERT INTO `EmployeeSkill` VALUES (1,1),(1,2),(1,3),(1,4),(1,6),(1,8),(2,1),(2,2),(2,3),(2,7),(2,8),(3,1),(3,2),(3,4),(3,5),(4,1),(4,2),(4,3),(4,4),(4,5),(4,6),(4,7),(4,8);
/*!40000 ALTER TABLE `EmployeeSkill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FillProductStock`
--

DROP TABLE IF EXISTS `FillProductStock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FillProductStock` (
  `product_id` int(3) NOT NULL,
  `em_id` int(3) NOT NULL,
  `fill_date` datetime NOT NULL,
  `fill_amount` int(5) NOT NULL,
  PRIMARY KEY (`product_id`,`em_id`,`fill_date`),
  KEY `FK_Employee_FillProductStock` (`em_id`),
  CONSTRAINT `FK_Employee_FillProductStock` FOREIGN KEY (`em_id`) REFERENCES `Employee` (`em_id`),
  CONSTRAINT `FK_Product_FillProductStock` FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FillProductStock`
--

LOCK TABLES `FillProductStock` WRITE;
/*!40000 ALTER TABLE `FillProductStock` DISABLE KEYS */;
/*!40000 ALTER TABLE `FillProductStock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Persons`
--

DROP TABLE IF EXISTS `Persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Persons` (
  `PersonID` int(11) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Persons`
--

LOCK TABLES `Persons` WRITE;
/*!40000 ALTER TABLE `Persons` DISABLE KEYS */;
INSERT INTO `Persons` VALUES (22,'dsdds');
/*!40000 ALTER TABLE `Persons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product` (
  `product_id` int(3) NOT NULL,
  `product_name` varchar(20) NOT NULL,
  `product_size` varchar(20) NOT NULL,
  `product_type` varchar(20) NOT NULL,
  `product_price` float NOT NULL,
  `product_amount` int(5) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` VALUES (1,'Panten','400 ml.','แชมพู',189,3),(2,'Panten','150 ml.','แชมพู',48,14),(3,'L_Oréal_Paris','400 ml.','แชมพู',199,15),(4,'L_Oréal_Paris','280 ml.','แชมพู',119,26),(5,'Dove','450 ml.','แชมพู',199,23),(6,'Dove','70 ml.','แชมพู',35,18),(7,'Oribe','100 ml.','น้ำมันใส่ผม',2000,22),(8,'Aveda','30 ml.','น้ำมันใส่ผม',899,38),(9,'moroccanoil','100 ml.','น้ำมันใส่ผม',1000,38),(10,'TRESemme','450 ml.','ครีมนวดผม',189,38),(11,'Sunsilk','160 ml.','ครีมนวดผม',69,27),(12,'L_Oréal','150 ml.','ครีมนวดผม',129,1),(13,'Olaplex','250 ml.','มาร์กผม/ทรีทเมนต์',2900,9),(14,'Davines','150 ml.','มาร์กผม/ทรีทเมนต์',900,21),(15,'Kérastase','100 ml.','มาร์กผม/ทรีทเมนต์',890,24),(16,'OPI','15 ml.','น้ำยาทาเล็บ',250,2),(17,'CND_Shellac','8 ml.','น้ำยาทาเล็บ',900,4),(18,'ZOYA','15 ml.','น้ำยาทาเล็บ',390,6),(19,'Essie','13 ml.','น้ำยาทาเล็บ',320,5),(20,'OPI_Expert_Touch','110 ml.','น้ำยาล้างเล็บ',400,6),(21,'Jurness','90 ml.','น้ำยาล้างเล็บ',53,3),(22,'wella professionals','60 ml.','ทำสีผม',230,13),(23,'Schwarzkopf','60 ml.','ทำสีผม',219,4),(24,'Manic_Panic','118 ml.','ทำสีผม',644,28),(25,'Herbal_Essences','400 ml.','แชมพู',190,8),(26,'Herbal_Essences','280 ml.','แชมพู',129,6),(27,'Head&Shoulders','370 ml.','แชมพู',179,7),(28,'Head&Shoulders','70 ml.','แชมพู',29,3),(29,'Garnier_Fructis','350 ml.','แชมพู',450,1),(30,'Garnier_Fructis','10 ml.','แชมพู',450,9),(31,'Kérastase','100 ml.','น้ำมันใส่ผม',800,9),(32,'PANTENE_Pro-V3','450 ml.','ครีมนวดผม',179,9),(33,'Sunsilk','400 ml.','ครีมนวดผม',120,18),(34,'Nail_Remover','85 ml.','น้ำยาล้างเล็บ',65,11),(35,'Nail_Remover','100 ml.','น้ำยาล้างเล็บ',80,10),(36,'L_Oréal','172 ml.','ทำสีผม',399,1);
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ProductBilling`
--

DROP TABLE IF EXISTS `ProductBilling`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductBilling` (
  `productbilling_id` int(3) NOT NULL,
  `cus_phone` varchar(10) NOT NULL,
  `productbiling_date` datetime NOT NULL,
  `em_id` int(3) NOT NULL,
  `ProductBillingTotalRevenue` float NOT NULL,
  PRIMARY KEY (`productbilling_id`),
  KEY `FK_Customer_ProductBilling` (`cus_phone`),
  KEY `FK_Employee_ProductBilling` (`em_id`),
  CONSTRAINT `FK_Customer_ProductBilling` FOREIGN KEY (`cus_phone`) REFERENCES `Customer` (`cus_phone`),
  CONSTRAINT `FK_Employee_ProductBilling` FOREIGN KEY (`em_id`) REFERENCES `Employee` (`em_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProductBilling`
--

LOCK TABLES `ProductBilling` WRITE;
/*!40000 ALTER TABLE `ProductBilling` DISABLE KEYS */;
INSERT INTO `ProductBilling` VALUES (1,'0243772942','2024-03-01 11:12:33',3,0),(2,'0906454637','2024-02-28 16:30:01',4,0),(3,'0222946044','2024-03-05 03:45:15',3,0),(4,'0222946044','2024-03-05 03:46:02',3,0),(5,'0222946044','2024-03-05 03:47:22',3,429),(6,'0222946044','2024-03-05 04:05:12',3,436),(7,'0222946044','2024-03-05 04:07:53',3,436),(8,'0222946044','2024-03-05 04:08:50',3,436),(9,'0222946044','2024-03-05 04:09:19',3,436),(10,'024670214','2024-03-05 10:54:57',1,189),(11,'0222946044','2024-03-05 15:06:07',2,237),(12,'0222946044','2024-03-05 15:42:18',1,237);
/*!40000 ALTER TABLE `ProductBilling` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ProductOrder`
--

DROP TABLE IF EXISTS `ProductOrder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductOrder` (
  `productbilling_id` int(3) NOT NULL,
  `product_id` int(3) NOT NULL,
  `productorder_amount` int(5) NOT NULL,
  `productorder_totalprice` float NOT NULL,
  PRIMARY KEY (`productbilling_id`,`product_id`),
  KEY `FK_Product_ProductOrder` (`product_id`),
  CONSTRAINT `FK_ProductBilling_ProductOrder` FOREIGN KEY (`productbilling_id`) REFERENCES `ProductBilling` (`productbilling_id`),
  CONSTRAINT `FK_Product_ProductOrder` FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProductOrder`
--

LOCK TABLES `ProductOrder` WRITE;
/*!40000 ALTER TABLE `ProductOrder` DISABLE KEYS */;
INSERT INTO `ProductOrder` VALUES (1,9,1,1000),(1,15,1,890),(2,17,3,2700),(2,20,2,800),(7,1,1,189),(7,2,1,48),(7,3,1,199),(8,1,1,189),(8,2,1,48),(8,3,1,199),(9,1,1,189),(9,2,1,48),(9,3,1,199),(10,1,1,189),(11,1,1,189),(11,2,1,48),(12,1,1,189),(12,2,1,48);
/*!40000 ALTER TABLE `ProductOrder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Service`
--

DROP TABLE IF EXISTS `Service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Service` (
  `service_id` int(3) NOT NULL,
  `service_name` varchar(20) NOT NULL,
  `service_avg_price` float NOT NULL,
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Service`
--

LOCK TABLES `Service` WRITE;
/*!40000 ALTER TABLE `Service` DISABLE KEYS */;
INSERT INTO `Service` VALUES (1,'สระผม',300),(2,'ย้อมผมแสนสวย',2000),(3,'ตัดผม',100),(4,'ตัดเล็บ',250),(5,'ทาเล็บ',200),(6,'ยืดผม',300),(7,'ทำไฮไลท์ผม',1000),(8,'รีดผม',200),(9,'บำรุงผมเบื้องต้น',450),(10,'ย้อมผมแสนสวย',700);
/*!40000 ALTER TABLE `Service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ServiceBilling`
--

DROP TABLE IF EXISTS `ServiceBilling`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ServiceBilling` (
  `servicebilling_id` int(3) NOT NULL,
  `cus_phone` varchar(10) NOT NULL,
  `em_id` int(3) NOT NULL,
  `commission_id` int(3) DEFAULT NULL,
  `servicebilling_date` datetime NOT NULL,
  `ServiceBillingTotalRevenue` float NOT NULL,
  PRIMARY KEY (`servicebilling_id`),
  KEY `FK_Customer_ServiceBilling` (`cus_phone`),
  KEY `FK_Employee_ServiceBilling` (`em_id`),
  KEY `FK_ServiceCommission_ServiceBilling` (`commission_id`),
  CONSTRAINT `FK_Customer_ServiceBilling` FOREIGN KEY (`cus_phone`) REFERENCES `Customer` (`cus_phone`),
  CONSTRAINT `FK_Employee_ServiceBilling` FOREIGN KEY (`em_id`) REFERENCES `Employee` (`em_id`),
  CONSTRAINT `FK_ServiceCommission_ServiceBilling` FOREIGN KEY (`commission_id`) REFERENCES `ServiceCommission` (`commission_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServiceBilling`
--

LOCK TABLES `ServiceBilling` WRITE;
/*!40000 ALTER TABLE `ServiceBilling` DISABLE KEYS */;
INSERT INTO `ServiceBilling` VALUES (1,'0906563245',1,NULL,'2024-03-04 10:15:48',0),(2,'0906454637',4,NULL,'2024-03-03 13:12:33',0),(3,'024670214',1,NULL,'2024-03-05 10:38:44',300),(4,'024670214',1,NULL,'2024-03-05 10:39:29',300),(5,'024670214',1,NULL,'2024-03-05 10:40:56',300),(6,'0222946044',1,NULL,'2024-03-05 15:37:32',300),(7,'0222946044',1,NULL,'2024-03-05 15:39:33',2000),(8,'0222946044',1,NULL,'2024-03-05 15:40:27',-2000);
/*!40000 ALTER TABLE `ServiceBilling` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ServiceBillingDate`
--

DROP TABLE IF EXISTS `ServiceBillingDate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ServiceBillingDate` (
  `em_id` int(11) DEFAULT NULL,
  `servicebilling_start` datetime DEFAULT NULL,
  `servicebilling_end` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServiceBillingDate`
--

LOCK TABLES `ServiceBillingDate` WRITE;
/*!40000 ALTER TABLE `ServiceBillingDate` DISABLE KEYS */;
INSERT INTO `ServiceBillingDate` VALUES (1,'2024-03-06 10:20:00','2024-03-21 10:30:00'),(2,'2024-03-06 10:10:00','2024-03-13 20:20:00'),(3,'2024-03-04 00:00:00','2024-03-06 00:00:00'),(4,'2024-03-04 10:10:00','2024-03-14 09:30:00');
/*!40000 ALTER TABLE `ServiceBillingDate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ServiceCommission`
--

DROP TABLE IF EXISTS `ServiceCommission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ServiceCommission` (
  `commission_id` int(3) NOT NULL,
  `em_id` int(3) NOT NULL,
  `commission_start_date` datetime NOT NULL,
  `commission_end_date` datetime NOT NULL,
  `commission_rate` float NOT NULL,
  `commission_get` float NOT NULL,
  PRIMARY KEY (`commission_id`),
  KEY `FK_Employee_ServiceCommission` (`em_id`),
  CONSTRAINT `FK_Employee_ServiceCommission` FOREIGN KEY (`em_id`) REFERENCES `Employee` (`em_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServiceCommission`
--

LOCK TABLES `ServiceCommission` WRITE;
/*!40000 ALTER TABLE `ServiceCommission` DISABLE KEYS */;
/*!40000 ALTER TABLE `ServiceCommission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ServiceOrder`
--

DROP TABLE IF EXISTS `ServiceOrder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ServiceOrder` (
  `servicebilling_id` int(3) NOT NULL,
  `service_id` int(3) NOT NULL,
  `service_order_revenue` float NOT NULL,
  PRIMARY KEY (`servicebilling_id`,`service_id`),
  KEY `FK_Service_ServiceOrder` (`service_id`),
  CONSTRAINT `FK_ServiceBilling_ServiceOrder` FOREIGN KEY (`servicebilling_id`) REFERENCES `ServiceBilling` (`servicebilling_id`),
  CONSTRAINT `FK_Service_ServiceOrder` FOREIGN KEY (`service_id`) REFERENCES `Service` (`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServiceOrder`
--

LOCK TABLES `ServiceOrder` WRITE;
/*!40000 ALTER TABLE `ServiceOrder` DISABLE KEYS */;
INSERT INTO `ServiceOrder` VALUES (1,3,100),(1,7,1000),(2,1,400),(2,2,2200),(2,3,100),(5,1,300),(6,1,300),(7,2,2000),(8,2,-2000);
/*!40000 ALTER TABLE `ServiceOrder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Test`
--

DROP TABLE IF EXISTS `Test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Test` (
  `TestID` int(11) DEFAULT NULL,
  `TestName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Test`
--

LOCK TABLES `Test` WRITE;
/*!40000 ALTER TABLE `Test` DISABLE KEYS */;
/*!40000 ALTER TABLE `Test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Withdraw`
--

DROP TABLE IF EXISTS `Withdraw`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Withdraw` (
  `product_id` int(3) NOT NULL,
  `em_id` int(3) NOT NULL,
  `withdraw_date` datetime NOT NULL,
  `withdraw_amount` int(5) NOT NULL,
  PRIMARY KEY (`product_id`,`em_id`,`withdraw_date`),
  KEY `FK_Employee_Withdraw` (`em_id`),
  CONSTRAINT `FK_Employee_Withdraw` FOREIGN KEY (`em_id`) REFERENCES `Employee` (`em_id`),
  CONSTRAINT `FK_Product_Withdraw` FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Withdraw`
--

LOCK TABLES `Withdraw` WRITE;
/*!40000 ALTER TABLE `Withdraw` DISABLE KEYS */;
/*!40000 ALTER TABLE `Withdraw` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-14 23:32:50
