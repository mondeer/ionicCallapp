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
  }];

  return {
    all: function() {
      return contacts;
    },
    triggerCall: function(contact) {
      contacts.splice(contacts.indexOf(contact), 1);
      window.plugins.CallNumber.callNumber(function onSuccess(){}, function(e){}, $scope.contact.phoneNumber);
    },
    get: function(contactId) {
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id === parseInt(contactId)) {
          return contacts[i];
        }
      }
      return null;
    }
  };
});