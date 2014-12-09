DROP TABLE IF EXISTS `vendors`;

CREATE TABLE `vendors` (
  `vendorId` INT(10) UNSIGNED NOT NULL PRIMARY KEY,
  `vendorName` VARCHAR(255) NOT NULL,
  `facilityType` VARCHAR(100) NOT NULL,
  `address` TEXT NOT NULL,
  `location` POINT NOT NULL,
  INDEX(`vendorName`),
  INDEX(`facilityType`),
  INDEX(`location`),
  INDEX(`vendorName`,`location`)
);
