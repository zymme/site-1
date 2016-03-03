'use strict';

var homeProjectApp = angular.module('homeProjectApp', ['ngResource', 'ngRoute'])
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

        $routeProvider.otherwise( {

            redirectTo: '/home'
        });



    });
