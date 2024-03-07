-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 15, 2023 at 01:42 PM
-- Server version: 11.2.2-MariaDB
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stock-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Carts`
--

CREATE TABLE `Carts` (
  `id` int(11) NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `LocationId` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `OrderId` int(11) DEFAULT NULL,
  `uom` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Carts`
--

INSERT INTO `Carts` (`id`, `UserId`, `ProductId`, `LocationId`, `quantity`, `OrderId`, `uom`, `createdAt`, `updatedAt`) VALUES
(1, 2, 2, 2, 33, 1, 'pcs', '2023-12-14 13:19:58', '2023-12-14 13:19:58'),
(2, 2, 2, 4, 22, 1, 'pcs', '2023-12-14 13:19:58', '2023-12-14 13:19:58'),
(3, 2, 1, 1, 222, 2, 'pcs', '2023-12-15 13:02:09', '2023-12-15 13:02:09'),
(4, 2, 1, 3, 111, 2, 'pcs', '2023-12-15 13:02:09', '2023-12-15 13:02:09'),
(5, 2, 4, 7, 44, 3, 'pcs', '2023-12-15 13:41:00', '2023-12-15 13:41:00');

-- --------------------------------------------------------

--
-- Table structure for table `Histories`
--

CREATE TABLE `Histories` (
  `id` int(11) NOT NULL,
  `log_type` varchar(255) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `RequestId` int(11) DEFAULT NULL,
  `OrderId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Histories`
--

INSERT INTO `Histories` (`id`, `log_type`, `UserId`, `RequestId`, `OrderId`, `createdAt`, `updatedAt`) VALUES
(1, 'User Order', 2, NULL, 1, '2023-12-14 13:19:58', '2023-12-14 13:19:58'),
(2, 'User Confirm Order', NULL, NULL, 1, '2023-12-15 12:59:40', '2023-12-15 12:59:40'),
(3, 'User Order', 2, NULL, 2, '2023-12-15 13:02:09', '2023-12-15 13:02:09'),
(4, 'Update Request', 2, 1, NULL, '2023-12-15 13:05:01', '2023-12-15 13:05:01'),
(5, 'User Confirm Order', NULL, NULL, 2, '2023-12-15 13:06:25', '2023-12-15 13:06:25'),
(6, 'User Order', 2, NULL, 3, '2023-12-15 13:41:00', '2023-12-15 13:41:00');

-- --------------------------------------------------------

--
-- Table structure for table `Locations`
--

CREATE TABLE `Locations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ProductId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Locations`
--

INSERT INTO `Locations` (`id`, `name`, `qty`, `createdAt`, `updatedAt`, `ProductId`) VALUES
(1, 'Jakarta', 111, '2023-12-14 13:18:34', '2023-12-15 13:06:25', 1),
(2, 'Bandung', 11, '2023-12-14 13:18:34', '2023-12-15 12:59:40', 2),
(3, 'Bandung', 4333, '2023-12-14 13:18:34', '2023-12-15 13:06:25', 1),
(4, 'Jakarta', 33, '2023-12-14 13:18:34', '2023-12-15 12:59:40', 2),
(5, 'Jakarta', 54, '2023-12-14 13:18:34', '2023-12-15 13:05:01', 3),
(6, 'Bandung', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 3),
(7, 'Jakarta', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 4),
(8, 'Bandung', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 4),
(9, 'Jakarta', 0, '2023-12-14 13:18:34', '2023-12-15 13:07:09', 5),
(10, 'Bandung', 33, '2023-12-14 13:18:34', '2023-12-15 13:07:09', 5),
(11, 'Jakarta', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 6),
(12, 'Bandung', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 6),
(13, 'Jakarta', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 7),
(14, 'Bandung', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 7),
(15, 'Jakarta', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 8),
(16, 'Bandung', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 8),
(17, 'Jakarta', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 9);

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `id` int(11) NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `applicantStaff` varchar(255) DEFAULT NULL,
  `activity` varchar(255) DEFAULT NULL,
  `division` varchar(255) DEFAULT NULL,
  `orderStatus` varchar(255) DEFAULT 'pending',
  `confirmTime` datetime DEFAULT NULL,
  `machine` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `LocationId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`id`, `UserId`, `applicantStaff`, `activity`, `division`, `orderStatus`, `confirmTime`, `machine`, `createdAt`, `updatedAt`, `ProductId`, `LocationId`) VALUES
(1, 2, 'ads', 'preventive', 'PL-INJECTION', 'confirmed', '2023-12-15 12:59:40', 'ad', '2023-12-14 13:19:58', '2023-12-15 12:59:40', NULL, NULL),
(2, 2, 'Test', 'preventive', 'PL-INJECTION', 'confirmed', '2023-12-15 13:06:25', 'Mchine-1', '2023-12-15 13:02:08', '2023-12-15 13:06:25', NULL, NULL),
(3, 2, 'sda', 'other', 'PL-LEM', 'pending', NULL, 'ss', '2023-12-15 13:41:00', '2023-12-15 13:41:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `uom` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id`, `name`, `uom`, `category`, `createdAt`, `updatedAt`) VALUES
(1, 'DC Shoes Striker', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(2, 'Nike Air Max', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(3, 'Adidas Predator', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(4, 'Nike Air Jordan', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(5, 'Nike Air Force', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(6, 'Nike Air Max 90', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(7, 'Nike Air Max 97', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(8, 'Nike Air Max 95', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(9, 'Nike Air Max 270', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(10, 'Nike Air Max 720', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(11, 'Nike Air Max 2090', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(12, 'Nike Air Max Plus', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(13, 'Nike Air Max 2090', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(14, 'Nike Air Max Plus', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(15, 'Nike Air Max 2090', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(16, 'Nike Air Max Plus', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(17, 'Nike Air Max 2090', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(18, 'Nike Air Max Plus', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(19, 'Nike Air Max 2090', 'pcs', 'Shoes', '2023-12-14 13:18:34', '2023-12-14 13:18:34');

-- --------------------------------------------------------

--
-- Table structure for table `Requests`
--

CREATE TABLE `Requests` (
  `id` int(11) NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `LocationId` int(11) DEFAULT NULL,
  `uom` varchar(255) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `status` varchar(255) DEFAULT 'pending',
  `confirmTime` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Requests`
--

INSERT INTO `Requests` (`id`, `UserId`, `ProductId`, `LocationId`, `uom`, `quantity`, `status`, `confirmTime`, `createdAt`, `updatedAt`) VALUES
(1, 2, 3, 5, 'pcs', 33, 'Available', '2023-12-15 13:05:01', '2023-12-15 13:02:32', '2023-12-15 13:05:01'),
(2, 2, 5, 9, 'pcs', 44, 'pending', NULL, '2023-12-15 13:11:01', '2023-12-15 13:11:01');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `username`, `email`, `password`, `role`, `position`, `firstName`, `lastName`, `phone`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin@mail.com', '$2a$10$ij4xv1StjIe/CzVtEJwXGOkibXOFhRoz5tKidN/j/tqbM1ag1NpsS', 'admin', 'Manager', 'Admin', 'Satu', '081234567890', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(2, 'kasino', 'kasino@mail.com', '$2a$10$ij4xv1StjIe/CzVtEJwXGOkibXOFhRoz5tKidN/j/tqbM1ag1NpsS', 'employee', 'Staff', 'Kasino', 'Indro', '081234567890', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(3, 'test', 'iuoh@mail.cpm', '$2a$10$N9iOMjT/FDKlgawUXbh.xeX2k/IsknpMJbs1LrhJCiJQWyJA4qieK', 'employee', 'Manager', 'asdasd', 'fdg', '098765435456', '2023-12-15 13:00:26', '2023-12-15 13:00:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Carts`
--
ALTER TABLE `Carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `ProductId` (`ProductId`),
  ADD KEY `LocationId` (`LocationId`),
  ADD KEY `OrderId` (`OrderId`);

--
-- Indexes for table `Histories`
--
ALTER TABLE `Histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `RequestId` (`RequestId`),
  ADD KEY `OrderId` (`OrderId`);

--
-- Indexes for table `Locations`
--
ALTER TABLE `Locations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ProductId` (`ProductId`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `ProductId` (`ProductId`),
  ADD KEY `LocationId` (`LocationId`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Requests`
--
ALTER TABLE `Requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `ProductId` (`ProductId`),
  ADD KEY `LocationId` (`LocationId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Carts`
--
ALTER TABLE `Carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Histories`
--
ALTER TABLE `Histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Locations`
--
ALTER TABLE `Locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `Requests`
--
ALTER TABLE `Requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Carts`
--
ALTER TABLE `Carts`
  ADD CONSTRAINT `Carts_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Carts_ibfk_2` FOREIGN KEY (`ProductId`) REFERENCES `Products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Carts_ibfk_3` FOREIGN KEY (`LocationId`) REFERENCES `Locations` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Carts_ibfk_4` FOREIGN KEY (`OrderId`) REFERENCES `Orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Histories`
--
ALTER TABLE `Histories`
  ADD CONSTRAINT `Histories_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Histories_ibfk_2` FOREIGN KEY (`RequestId`) REFERENCES `Requests` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Histories_ibfk_3` FOREIGN KEY (`OrderId`) REFERENCES `Orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Locations`
--
ALTER TABLE `Locations`
  ADD CONSTRAINT `Locations_ibfk_1` FOREIGN KEY (`ProductId`) REFERENCES `Products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Orders_ibfk_2` FOREIGN KEY (`ProductId`) REFERENCES `Products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Orders_ibfk_3` FOREIGN KEY (`LocationId`) REFERENCES `Locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Requests`
--
ALTER TABLE `Requests`
  ADD CONSTRAINT `Requests_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Requests_ibfk_2` FOREIGN KEY (`ProductId`) REFERENCES `Products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Requests_ibfk_3` FOREIGN KEY (`LocationId`) REFERENCES `Locations` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
