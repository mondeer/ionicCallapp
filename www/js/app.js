// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('muscularDistrophy', ['ionic'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .controller("callController", function($scope) {

        $scope.contacts = {
            phoneNumber: '+254724871111',
            face: 'img/kan.jpg'
        },{phoneNumber: '+16124021748', face: 'img/kan.jpeg'};
        // console.log($scope.contacts);
        $scope.triggerCall = function(){
            
            window.plugins.CallNumber.callNumber(function onSuccess(){}, function(e){}, $scope.contacts.phoneNumber);
            
        }
    });