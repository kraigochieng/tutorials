'use strict';
app.controller('userController', [
    '$scope',
    function userController($scope) {
        $scope.myFormData = {
            firstName: 'John',
            lastName: 'Doe',
            email: '',
        }

        
        $scope.fullName = function () {
            return $scope.myFormData.firstName + " " + $scope.myFormData.lastName
        }
        $scope.text = 'old text'

        $scope.changeText = function () {
            $scope.text = 'updated text'
        }

        $scope.changeFirstName = function () {
            console.log('clicked')
            $scope.myFormData.firstName = "Changed John"
        }

        $scope.backgroundColor = 'lightblue'
        $scope.names = ['Kramer', 'Doechii', 'Qwenverse', 'Nihquarter']
    }
])
