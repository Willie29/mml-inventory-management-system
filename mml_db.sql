-- Table structure for table `Carts`
CREATE TABLE `Carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `LocationId` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `OrderId` int(11) DEFAULT NULL,
  `uom` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  KEY `ProductId` (`ProductId`),
  KEY `LocationId` (`LocationId`),
  KEY `OrderId` (`OrderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `Histories`
CREATE TABLE `Histories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `log_type` varchar(255) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `RequestId` int(11) DEFAULT NULL,
  `OrderId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  KEY `RequestId` (`RequestId`),
  KEY `OrderId` (`OrderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `Locations`
CREATE TABLE `Locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ProductId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ProductId` (`ProductId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `Orders`
CREATE TABLE `Orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `LocationId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  KEY `ProductId` (`ProductId`),
  KEY `LocationId` (`LocationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `Products`
CREATE TABLE `Products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `uom` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `Requests`
CREATE TABLE `Requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `LocationId` int(11) DEFAULT NULL,
  `uom` varchar(255) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `status` varchar(255) DEFAULT 'pending',
  `confirmTime` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  KEY `ProductId` (`ProductId`),
  KEY `LocationId` (`LocationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `Users`
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
  `updatedAt` datetime NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Adding Foreign Key Constraints for table `Carts`
ALTER TABLE `Carts`
  ADD CONSTRAINT `fk_Carts_UserId` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Carts_ProductId` FOREIGN KEY (`ProductId`) REFERENCES `Products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Carts_LocationId` FOREIGN KEY (`LocationId`) REFERENCES `Locations` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Carts_OrderId` FOREIGN KEY (`OrderId`) REFERENCES `Orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
  
-- Adding Foreign Key Constraints for table `Histories`
ALTER TABLE `Histories`
  ADD CONSTRAINT `fk_Histories_UserId` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Histories_RequestId` FOREIGN KEY (`RequestId`) REFERENCES `Requests` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Histories_OrderId` FOREIGN KEY (`OrderId`) REFERENCES `Orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- Adding Foreign Key Constraint for table `Locations`
ALTER TABLE `Locations`
  ADD CONSTRAINT `fk_Locations_ProductId` FOREIGN KEY (`ProductId`) REFERENCES `Products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Adding Foreign Key Constraints for table `Orders`
ALTER TABLE `Orders`
  ADD CONSTRAINT `fk_Orders_UserId` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Orders_ProductId` FOREIGN KEY (`ProductId`) REFERENCES `Products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Orders_LocationId` FOREIGN KEY (`LocationId`) REFERENCES `Locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--Table seeder

--Inserting dummy data
INSERT INTO `Users` (`id`, `username`, `email`, `password`, `role`, `position`, `firstName`, `lastName`, `phone`, `createdAt`, `updatedAt`) VALUES
(1, 'Willyam', 'willy@mail.com', '$2a$10$ij4xv1StjIe/CzVtEJwXGOkibXOFhRoz5tKidN/j/tqbM1ag1NpsS', 'admin', 'Stock Manager', 'Willyam', 'Dyanata', '081234567890', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(2, 'Steven', 'steven@mail.com', '$2a$10$ij4xv1StjIe/CzVtEJwXGOkibXOFhRoz5tKidN/j/tqbM1ag1NpsS', 'employee', 'Staff Gudang A', 'Steven', 'Setiadi', '085294568463', '2023-12-14 14:18:00', '2023-12-14 14:18:00');

INSERT INTO `Products` (`id`, `name`, `uom`, `category`, `createdAt`, `updatedAt`) VALUES
(1, 'Bata', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(2, 'Semen', 'karung', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(3, 'Besi Beton', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(4, 'Keramik', 'box', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(5, 'Beton Ringan', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(6, 'Papan Kayu', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(7, 'Genteng', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(8, 'Material Insulasi', 'roll', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(9, 'Ember Cat', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(10, 'Pipa PVC', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(11, 'Kabel Listrik', 'roll', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(12, 'Pipa Plumbing', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(13, 'Bata', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(14, 'Papan Kayu', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(15, 'Bata', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(16, 'Papan Kayu', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(17, 'Bata', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(18, 'Papan Kayu', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34'),
(19, 'Bata', 'pcs', 'Material Bangunan', '2023-12-14 13:18:34', '2023-12-14 13:18:34');

INSERT INTO `Locations` (`id`, `name`, `qty`, `createdAt`, `updatedAt`, `ProductId`) VALUES
(1, 'Gudang A', 111, '2023-12-14 13:18:34', '2023-12-15 13:06:25', 1),
(2, 'Gudang B', 11, '2023-12-14 13:18:34', '2023-12-15 12:59:40', 2),
(3, 'Gudang B', 4333, '2023-12-14 13:18:34', '2023-12-15 13:06:25', 1),
(4, 'Gudang A', 33, '2023-12-14 13:18:34', '2023-12-15 12:59:40', 2),
(5, 'Gudang A', 54, '2023-12-14 13:18:34', '2023-12-15 13:05:01', 3),
(6, 'Gudang B', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 3),
(7, 'Gudang A', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 4),
(8, 'Gudang B', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 4),
(9, 'Gudang A', 0, '2023-12-14 13:18:34', '2023-12-15 13:07:09', 5),
(10, 'Gudang B', 33, '2023-12-14 13:18:34', '2023-12-15 13:07:09', 5),
(11, 'Gudang A', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 6),
(12, 'Gudang B', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 6),
(13, 'Gudang A', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 7),
(14, 'Gudang B', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 7),
(15, 'Gudang A', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 8),
(16, 'Gudang B', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 8),
(17, 'Gudang A', 10, '2023-12-14 13:18:34', '2023-12-14 13:18:34', 9);