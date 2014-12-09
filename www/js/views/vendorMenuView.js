var app = app || {};

app.VendorMenuView = Backbone.View.extend({
  el: $('#vendorMenuItems'),

  initialize: function() {
    this.menuList = $('#menuList');
  },

  events: {
    'click #closeMenu': 'clearMenu',
    'click li#item': 'searchItem'
  },

  // Invoked when an item on the menu is clicked. Searches for all the vendors serving that item
  searchItem: function(ev) {
    var item = $(ev.currentTarget).attr('itemName');
    this.clearMenu();
    $("#foodSearchInput").val(item);
    app.mapView.searchVendors();
  },

  // Clears the contents of the menu and hides it
  // Also, undelegate all the attached events (This prevents multiple events being fired on 1 click)
  clearMenu: function() {
    $("#overlay").fadeOut();
    this.$el.fadeOut();
    this.$('#menuList').html('');
    this.undelegateEvents();
  },

  // Creates the menu from the list of food items fetched from the server
  render: function(options) {
    var that = this;
    var menu = new app.FoodItems({vendorId: options.vendorId});
    menu.fetch({
      success: function(foodItems) {
        foodItems.each(function(item) {
          that.menuList.append("<li style='cursor:pointer' id='item' itemName='" + item.get('itemName') + "'><p>" + item.get('itemName') + "</p></li>");
        });

        $("#overlay").fadeIn();
        that.$el.fadeIn();
      }
    });
  }
});
