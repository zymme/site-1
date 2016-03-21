/**
 * Created by zimmerd on 2/29/16.
 */

'use strict';

homeProjectApp.controller('ContactController', function ContactController($scope, $http, APP_KEY) {

    $scope.contact = {
        first_name: 'Zed',
        last_name: 'Zimmer',
        cell_number: '555-555-5555',
        email: 'canuckzed@gmail.com',
        created: '2016-02-29',
        policy_number: '3232325',
        session_id: 'alsdjkds23929293lsk2-9292'
    }

    console.log('app-key is ', APP_KEY);

    $scope.authUrl = "http://local.pinnacol.com:3000/auth";

    var self = this;
    var url = 'http://localhost:8811/tokenv2/' + $scope.contact.policy_number + '/' + $scope.contact.session_id;
    console.log('tokenurl = ' + url);

    //$http.get(url)
    //    .then(function(response) {
    //        console.log(response);
    //        $scope.contact.token = response.data.token;
    //
    //        console.log('contact token ', $scope.contact.token);
    //    })

    $scope.currentUser = function() {

        var cfgHeader = {
            headers: {
                'application-key': APP_KEY
            }
        };

        $http.defaults.withCredentials = true;

        $http.get($scope.authUrl + '/current_user.json', cfgHeader)
            .then(function(response) {
                console.log(response);
                $scope.contact.current_policy_num = response.data.current_policy_num;
                $scope.contact.email = response.data.email;
                $scope.contact.current_policy_claim_count = response.data.current_policy_claim_count;
                $scope.contact.current_policy_name = response.data.current_policy_name;

            })
            .catch(function(err) {
                console.error("ERROR >>>> ", err);
            })


    }

});
