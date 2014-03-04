'use strict';

angular.module('App')
  .controller('MainCtrl', function ($scope) {
    $scope.dropzoneConfig = {
      init: function() {
        this.on('addedfile', function(file) {
          var fr = new FileReader();
          fr.onload = function() {
            $scope.data = angular.fromJson(fr.result);
            $scope.$apply();
          };
          fr.readAsText(file);
        });
      },
      url: '/',
      autoProcessQueue: false,
      error: function(file, responseText, e) {
        console.log('Error! ', e);
      }
    };
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
