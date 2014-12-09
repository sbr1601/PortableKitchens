var app = app || {};

app.VendorLinkView = Backbone.View.extend({

  initialize: function(options) {
    this.mapMarker = options.mapMarker;
    this.model.on('remove', this.removeItem, this);
    this.render();
  },

  events: {
    'mouseover a': 'showVendorInfo',
    'mouseout a': 'hideVendorInfo',
    'click a': 'showMenuItems',
    'click button': 'deleteVendor'
  },

  // Opens the google maps infowindow for the current vendor on the map
  showVendorInfo: function() {
    this.mapMarker.marker.infowindow.open(this.mapMarker.map, this.mapMarker.marker);
  },

  // Closes the maps infowindow
  hideVendorInfo: function() {
    this.mapMarker.marker.infowindow.close();
  },

  // Destroys the vendor instance (Also removes it from the map and vendorList)
  deleteVendor: function() {
    this.model.clear();
  },

  // Displays the menu popup for the current vendor
  showMenuItems: function() {
    this.mapMarker.showMenu();
  },

  // Creates a list item for the current vendor
  render: function() {
    this.$el.html('<li><a href="#">' + this.model.get('vendorName') + '</a><button style="padding-left: 10px" class="close">×</button></li>');
    return this;
  },

  // Removes the list item
  removeItem: function() {
    this.$el.html('');
  }
});
