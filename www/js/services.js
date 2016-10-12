angular.module('muscularDistrophy.services', [])

.factory('Contacts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var contacts = [{
    id: 0,
    phoneNumber: '+254724871111',
    face: 'img/my.jpg'
  }, {
    id: 1,
    phoneNumber: '+16124021748',
    face: 'img/my.jpg'
  }]
});