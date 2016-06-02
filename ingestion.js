var Transit = require('transportation')
var transit = new Transit()

var konsole = require('transportation/console');
// import GTFS data
transit.importGTFS('./data', function (err) {
  // have a look at the Transit instance
  //console.log(transit.routes);
  konsole(transit.agencies.NJT.routes[3].trips[69].stops);
});
