/**
 * Created by zimmerd on 2/29/16.
 */

'use strict';

homeProjectApp.controller('ContactController', function ContactController($scope, $http) {

    $scope.contact = {
        first_name: 'Zed',
        last_name: 'Zimmer',
        cell_number: '555-555-5555',
        email: 'canuckzed@gmail.com',
        created: '2016-02-29'
    }

    var self = this;


    $scope.sendIt = function() {
        console.log("In send it function...");

        console.log('User entered for pol num = ' + $scope.contact.policy_number);


    }

});
