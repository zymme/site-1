'use strict';

var homeProjectApp = angular.module('homeProjectApp', ['ngResource', 'ngRoute'])
    .constant('APP_KEY', '0d970426fee66f56cd6f37b8e112fca055ebcab639cc92ab36d9962efe54953a')
    .config(function($routeProvider) {

        $routeProvider.when('/projects', {

            templateUrl: 'templates/Projects.html',
            controller: 'ProjectController'
        });

        $routeProvider.when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        });

        $routeProvider.when('/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'ContactController',
            controllerAs: 'contactCtrl'
        });

        $routeProvider.when('/testnav', {
            templateUrl: 'templates/testnav.html',
            controller: 'TestnavController'
        });

        $routeProvider.otherwise( {

            redirectTo: '/home'
        });



    });
    //.directive('datePicker', DatePicker);
