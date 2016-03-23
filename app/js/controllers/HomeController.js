/**
 * Created by zimmerd on 2/29/16.
 */
homeProjectApp.controller('HomeController', function HomeController($scope) {

    $scope.datepick = null;
    $scope.thedate = null;


    var mydate = $('#datepick').on('changeDate', function(ev) {
        console.log("inside datepick change event!!");
        $scope.thedate = ev.date;
        console.log("value of datepick is ", $scope.thedate);
    });


});
