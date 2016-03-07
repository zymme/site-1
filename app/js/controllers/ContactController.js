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
        created: '2016-02-29',
        policy_number: '3232325',
        session_id: '99999999'
    }

    var self = this;
    var url = 'http://localhost:8811/token/' + $scope.contact.policy_number + '/' + $scope.contact.session_id;
    console.log('tokenurl = ' + url);

    //$http.get('http://localhost:8811/token/' + )

    $http.get(url)
        .then(function(response) {
            console.log(response);
            $scope.contact.token = response.data.token;

            console.log('contact token ', $scope.contact.token);
        })

    //$scope.sendIt = function() {
    //    console.log("In send it function...");
    //
    //    console.log('User entered for pol num = ' + $scope.contact.policy_number);
    //
    //
    //
    //    $http.get('http://localhost:8088/#/view', config)
    //        .then(function(response) {
    //            console.log(response);
    //        });
    //
    //
    //}

});
