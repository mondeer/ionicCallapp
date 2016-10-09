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

        $scope.data = {
            phoneNumber : "+254724871111"
        };

        $scope.dialNumber = function(number) {
            window.open('tel:' + number, '_system');
        }
        $scope.triggerCall = function(number){
            window.plugins.CallNumber.callNumber(function(){}, function(e){}, '0724871111');
        }
    })
