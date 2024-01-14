app.directive('task', function() {
    return {
        restrict: 'E',
        scope: {
            task: '='
        },
        templateUrl: 'directives/taskDirective.html'
    }
})