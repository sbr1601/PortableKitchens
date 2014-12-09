var app = app || {};

app.VendorMarkerView = Backbone.View.extend({
  tagName: "li",

  /**
   * @desc Instantiates a map marker object for the given vendor object
   * @param Map on which the vendor's location needs to be plotted
   * @param An object of app.Vendor
   */
  initialize: function(options) {
    this.model = options.model;
    this.map = options.map;
    this.vendorId = this.model.get('vendorId');
    var that = this;

    that.model.on('remove', that.remove, that);

    that.marker = new google.maps.Marker({
      map: that.map,
      position: new google.maps.LatLng(that.model.get('latitude'), that.model.get('longitude')),
      animation: google.maps.Animation.DROP,
      icon: 'images/foodTruck.png',
      title: that.model.get('vendorName'),
      descr: that.model.get('address'),
      id: that.model.get('vendorId')
    });

    var contentString = '<div id="content">'+
      '<div>'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">' + that.model.get('vendorName') + '<h1>'+
      '<h2><small>' + that.model.get('address') +  '</small></h1>';

    that.marker.infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(that.marker, 'mouseover', that.showVendorInfo);
    google.maps.event.addListener(that.marker, 'mouseout', that.hideVendorInfo);
    google.maps.event.addListener(that.marker, 'click', that.showMenu);
  },

  // Opens the map infowindow for the current vendor
  showVendorInfo: function() {
    this.infowindow.open(this.map, this);
  },

  // Closes the infowindow popup
  hideVendorInfo: function() {
    this.infowindow.close();
  },

  // Shows the list of food items available at the current vendor
  showMenu: function() {
    var vendorMenuView = new app.VendorMenuView();
    vendorMenuView.render({vendorId: this.vendorId});
  },

  render: function() { },

  // Removes the vendor info marker from the map
  remove: function() {
    this.marker.setMap(null);
    this.marker = null;
  }
});
