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

        var config = {headers: {
            "X-TestingPol" : $scope.contact.policy_number,
            "Access-Control-Allow-Origin": true
        }}

        $http.get('http://localhost:8088/#/view', config)
            .then(function(response) {
                console.log(response);
            });


    }

});
