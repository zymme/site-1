/**
 * Created by zimmerd on 3/22/16.
 */

homeProjectApp.directive('datepicker', function DatePicker(){
    return {
        require: 'ngModel',
        restrict: 'A',
        scope: { format: "=" },
        link: function(scope, element, attrs, ngModel){
            if(typeof(scope.format) == "undefined"){ scope.format = "yyyy-mm-dd" }
            $(element).fdatepicker({format: scope.format}).on('changeDate', function(ev){
                scope.$apply(function(){
                    ngModel.$setViewValue(ev.date);
                });
            })
        }
    }
} );

