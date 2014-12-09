var app = app || {};

app.VendorMapView = Backbone.View.extend({
  el: $("#container"),

  initialize: function() {
    app.mapOptions = {
      zoom: app.Config.mapZoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: app.Config.mapStyles
    };
    this.initializeMap();
  },

  // Loads the map in the DOM and centers it on the default location (defined in app.Config)
  initializeMap: function() {
    app.mapOptions.center = new google.maps.LatLng(app.Config.mapLocation.latitude, app.Config.mapLocation.longitude);
    app.map = new google.maps.Map(document.getElementById('map_canvas'), app.mapOptions);
    var that = this;

    setTimeout(function() {
      $('#map_controls').fadeIn();
      $("#foodSearchForm").fadeIn();
    }, 1000);

    setTimeout(function() {
      that.loadVendors(null);
    }, 2000);
  },

  /**
   * @desc Fetches a collection of vendor data from the server and passes it to the ListView object
   * @param foodItem to be searched for among vendors. If null, loads all vendors
   */
  loadVendors: function(search) {
    var searchData = search || null;
    app.vendors = new app.Vendors({search: searchData});
    app.vendors.fetch();
    this.vendorList = new app.VendorListView({model: app.vendors, map: app.map});
  },

  events: {
    'submit form' : 'searchVendors',
  },

  searchVendors: function(ev) {
    this.vendorList.deleteAllVendors();
    var foodSearch = $("#foodSearchInput").val();
    this.loadVendors(foodSearch);
    return false;
  }

});
