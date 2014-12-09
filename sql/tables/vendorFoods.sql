DROP TABLE IF EXISTS `venderFoods`;

CREATE TABLE `vendorFoods` (
  `itemId` INT(10) NOT NULL, 
  `vendorId` INT(10) NOT NULL,
  PRIMARY KEY(`itemId`,`vendorId`)
);
