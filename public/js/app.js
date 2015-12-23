/**
 * Created by UC206612 on 12/23/2015.
 */


(function() {
    'use strict';

    angular
        .module("app",['ngRoute'])
        .config(config);

    config.$inject = ['$routeProvider','$locationProvider'];

    function config($routeProvider, $locationProvider){
        $routeProvider.
            when('/view1', {
                templateUrl: 'partials/partial1',
                controller: 'MyCtrl1'
            }).
            when('/view2', {
                templateUrl: 'partials/partial2',
                controller: 'MyCtrl2'
            }).
            otherwise({
                redirectTo: '/view1'
            });
    }

})();