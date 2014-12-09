<?php

require_once dirname(dirname(__FILE__)) . '/path.php';
require_once PK_PATH . '/include/class/DBConnection.php';

class FoodItems {

  const FOOD_ITEM_LIMIT = 200;

  /**
   * Get the menu of the passed vendorId
   *
   * @param ID of the vendor who's menu needs to be fetched
   * @return Array of food items available at the vendor with id, and name information
   */
  public static function getItems($vendorId) {
    $pkDB = new DBConnection('pkRead');
    $sql = "SELECT fi.itemId itemId, itemName FROM foodItems fi, vendorFoods vf WHERE vf.itemId = fi.itemId AND vendorId = " . $pkDB->validate($vendorId, DBConnection::INT);
    $items = $pkDB->queryToArray($sql);
    return $items;
  }

  /**
   * Get the list of all food items available across all vendors
   *
   * @return Array list of all food items with id, and name information
   */
  public static function getAllItems() {
    $pkDB = new DBConnection('pkRead');
    $sql = "SELECT itemId, itemName FROM foodItems ORDER BY RAND() LIMIT " . self::FOOD_ITEM_LIMIT;
    $items = $pkDB->queryToArray($sql);
    return $items;
  }

  /**
   * Get a list of foodItem Ids that match a passed name
   *
   * @param name of the food item to be searched
   * @return Array of matching foodItem Ids
   */
  public static function getFoodItemIdsByName($name) {
    $pkDB = new DBConnection('pkRead');
    $sql = "SELECT itemId FROM foodItems WHERE itemName LIKE '%" . $pkDB->validate($name, DBConnection::TEXT) . "%'";
    $itemIds = $pkDB->queryToArray($sql);
    return $itemIds;
  }

}
