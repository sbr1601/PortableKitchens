var app = app || {};

app.VendorListView = Backbone.View.extend({
  el: $('#vendorsBox'),

  initialize: function(options) {
    this.map = options.map,
    this.model.on('add', this.showVendor, this);

    this.$el.fadeIn('500');
    this.vendorList = $('#vendorList ul', this.$el);
    this.render();
  },

  /**
   * @desc Plots the current vendor location on the map (VendorMarkerView) and creates a corresponding list item (VendorLinkView)
   * @param Instance of the model app.Vendor
   */
  showVendor: function(vendor) {
    var mapMarker = new app.VendorMarkerView({model: vendor, map: this.map});
    var vendorLink = new app.VendorLinkView({model: vendor, mapMarker: mapMarker});
    $(this.vendorList).append(vendorLink.render().el);
  },

  render: function() {
    this.model.each(this.showVendor, this);
  },

  deleteAllVendors : function() {
    app.vendors.removeAll();
  }

});
