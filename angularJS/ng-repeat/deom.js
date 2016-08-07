angular.module('myApp', [])
.controller('TasksCtrl', function($scope) {
    var date = new Date().toISOString();
    $scope.tasks = [];
    for (var i = 1; i < 301; i++) {
        $scope.tasks.push({
            id: i,
            title: 'Task ' + i, 
            date: date
        });
    }
    
    $scope.refresh = function() {
        console.log("refreshing")
        $scope.tasks = angular.copy($scope.tasks);
    };
})
.directive('task', function() {
    return {
        scope: {
            task: '='
        },
        template: '{{ task.title }} <span class="time">({{ prettyTaskDate }})</span>',
        link: function(scope) {
            console.log('rendering', scope.task.id);
      
            scope.$watch('task.date', function() {
                scope.prettyTaskDate = moment(scope.task.date).fromNow();
            });
        }
    };
});