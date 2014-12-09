<?php

require_once dirname(dirname(dirname(__FILE__))) . '/include/path.php';
require_once PK_PATH . '/thirdparty/vendor/autoload.php';
require_once PK_PATH . '/include/class/Vendors.php';
require_once PK_PATH . '/include/class/FoodItems.php';

$app = new \Slim\Slim();

// Returns a list of random vendors with id, name, and address information
$app->get('/vendors', function() {
  echo json_encode(Vendors::getRandomVendors());
});

// Return a list of vendors having the foodItem in their menu
$app->get('/vendors/:foodItem', function($foodItem) {
  echo json_encode(Vendors::getVendorsByFood($foodItem));
});

// Return the food items available at a particular vendor
$app->get('/foodItems/:vendorId', function($vendorId) {
  echo json_encode(FoodItems::getItems($vendorId));
});

// Returns a list of all the food itms available
$app->get('/foodItems', function() {
  echo json_encode(FoodItems::getAllItems());
});

$app->run();
