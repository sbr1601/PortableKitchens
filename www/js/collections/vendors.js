var app = app || {};

app.Vendors = Backbone.Collection.extend({
  model: app.Vendor,

  /**
   * @desc REST API hit to fetch list of vendors
   * @param foodItem to be searched among vendors. If null, return all vendors
   */
  initialize: function(options) {
    this.url = '/vendors';
    if(options.search) {
      this.url += '/' + options.search;
    }
  },

  // Destroy all instances of app.Vendor in this collection
  removeAll: function() {
    var vendor;
    while(vendor = this.pop()) {
      vendor.destroy();
    }
  }
});
