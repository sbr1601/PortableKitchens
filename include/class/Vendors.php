<?php

require_once dirname(dirname(__FILE__)) . '/path.php';
require_once PK_PATH . '/include/class/DBConnection.php';
require_once PK_PATH . '/include/class/FoodItems.php';

class Vendors {

  const VENDOR_LIMIT = 20;

  /**
   * Get a random list of vendors who have at least 1 food item in their menu
   *
   * @return Array of Vendors::VENDOR_LIMIT vendors with id, name, address, and location information
   */
  public static function getRandomVendors() {
    $pkDB = new DBConnection('pkRead');

    $sql  = "SELECT DISTINCT v.vendorId vendorId, vendorName, address, X(location) latitude, Y(location) longitude ";
    $sql .= "FROM vendors v, vendorFoods vf WHERE v.vendorId = vf.vendorId ";
    $sql .=" ORDER BY RAND() LIMIT " . self::VENDOR_LIMIT;

    $vendors = $pkDB->queryToArray($sql);
    return $vendors;
  }

  /**
   * Search for vendors that have a passed foodName in their menu
   *
   * @param foodName to be searched for
   * @return Array of random Vendors::VENDOR_LIMIT vendors with id, name, address, and location information
   */
  public static function getVendorsByFood($foodName) {
    $foodItemIds = FoodItems::getFoodItemIdsByName($foodName);
    if(empty($foodItemIds)) {
      return array();
    }

    $itemIds = array();
    foreach($foodItemIds as $item) {
      $itemIds[] = $item['itemId'];
    }

    $pkDB = new DBConnection('pkRead');
    $itemIdList = implode(',', $itemIds);

    $sql  = "SELECT DISTINCT v.vendorId vendorId, vendorName, address, X(location) latitude, Y(location) longitude ";
    $sql .= "FROM vendors v, vendorFoods vf WHERE v.vendorId = vf.vendorId AND itemId IN ($itemIdList) ";
    $sql .= "ORDER BY RAND() LIMIT " . self::VENDOR_LIMIT;

    $vendors = $pkDB->queryToArray($sql);
    return $vendors;
  }

}
