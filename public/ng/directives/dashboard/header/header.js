angular.module('matApp')
    .directive('customHeader', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/header/header.tmpl.html',
            controller: function($scope, $state, $http, $log, $q, $timeout, $window) {
                
                
                

               
            }

        };
    }]);