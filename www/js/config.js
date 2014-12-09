var app = app || {};

app.Config = {
  apiBaseUrl: 'http://sbr1601.com/PortableKitchens/api',

  mapLocation: {latitude: 37.775, longitude: -122.4183333}, // Center of San Francisco
  mapZoom: 13,

  mapStyles: [{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]},
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color: "#C6E2FF" }
    ]},
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        { color: "#D1D1B8" }
    ]}
  ]
};
