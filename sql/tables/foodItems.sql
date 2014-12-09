DROP TABLE IF EXISTS `foodItems`;

CREATE TABLE `foodItems` (
  `itemId` INT(10) AUTO_INCREMENT PRIMARY KEY,
  `itemName` VARCHAR(100) NOT NULL,
  INDEX(`itemName`)
);
