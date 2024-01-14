app.controller('customerController', ['$scope', '$location','$http', function($scope, $location, $http) {
    $scope.myUrl = $location.absUrl()
    $http
        .get("https://www.w3schools.com/angular/customers.php")
        .then(function(response) {
            $scope.customers = response.data.records  
            console.log(response.data)       
        })
}])