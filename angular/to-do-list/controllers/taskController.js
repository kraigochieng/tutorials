app.controller("taskController", ['$scope', function($scope) {
    $scope.taskFormData = {
        id: 0,
        title: "",
        description: "",
        isDone: false
    }

    $scope.tasks = []

    $scope.addTask = function() {
        // Add Task To List
        $scope.taskFormData.id = $scope.tasks.length + 1
        $scope.tasks.push(angular.copy($scope.taskFormData))
        // Clear the form
        for(const key in $scope.taskFormData) {
            // Leave the boolean alone
            if(key !== 'isDone') {
                $scope.taskFormData[key] = ""
            }
        }
    }    
}])