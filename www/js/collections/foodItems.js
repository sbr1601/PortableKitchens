var app = app || {};

app.FoodItems = Backbone.Collection.extend({
  model: app.FoodItem,

  /**
   * @desc REST API hit to fetch list of food items
   * @param Id of the vendor who's menu needs to be fetched. If null, return all food items available
   */
  initialize: function(options) {
    this.url = '/foodItems';
    if(options.vendorId) {
      this.url += '/' + options.vendorId;
    }
  }

});
