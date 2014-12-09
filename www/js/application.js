var app = app || {};

app.foodItemList = [];

app.MainView = Backbone.View.extend({
  initialize: function() {
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
      options.url = app.Config.apiBaseUrl + options.url;
    });

    google.maps.event.addDomListener(window, "load", function() {
      app.mapView = new app.VendorMapView();
    });

    this.loadFoodItems();
  },

  // Loads a list of all available food Items from the server
  loadFoodItems: function() {
    var that = this;
    var foodItems = new app.FoodItems({vendorId: null});
    foodItems.fetch({
      success: function(items) { that.foodSearchAutocomplete(items); }
    });    
  },

  /**
   * @desc Setup jQuery ui autocomplete on the food search input text
   * @param Collection of foodItems with itemId, and itemName
   */
  foodSearchAutocomplete: function(items) {
    items.each(function(item) {
      app.foodItemList.push(item.get('itemName'));
    });

    $("input#foodSearchInput").autocomplete({
      source: app.foodItemList
    });
  }
});

$(function() {
  new app.MainView();
});
