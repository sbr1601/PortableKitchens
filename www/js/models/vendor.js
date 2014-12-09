var app = app || {};

app.Vendor = Backbone.Model.extend({
  defaults: {
    vendorId: '',
    vendorName: '',
    address: '',
    latitude: '',
    longitude: '',
  },

  clear: function() {
    this.destroy();
  }
});
