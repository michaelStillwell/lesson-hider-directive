angular.module('directivePractice').directive('lessonHider', function() {
    return {
        templateUrl: './lessonHider.html',
        restrict: 'E',
        scope: {
            lesson: '=',
            dayAlert: '&',
            strikeThrough: '&',
        },
        controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();
        },
        link: function(scope, elem, attr) {            
            scope.getSchedule.then(response => {
                scope.schedule = response.data;
                // elem.css('text-decoration', 'line-through');

                scope.schedule.forEach(day => {
                    if ( day.lesson === scope.lesson ) {
                        scope.lessonDay = day.weekday;
                        console.log(scope.lessonDay)
                //         elem.css('text-decoration', 'line-through');
                //         console.log(elem)
                    }
                })
            })
        },
    }
});