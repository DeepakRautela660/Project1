////const { animation } = require("modernizr");

////(function () {
////    'use strict';

////    angular
////        .module('app')
////        .controller('Angularcontroller', Angularcontroller);

////    Angularcontroller.$inject = ['$location'];

////    function Angularcontroller($location) {
////        /* jshint validthis:true */
////        var vm = this;
////        vm.title = 'Angularcontroller';

////        activate();

////        function activate() { }
////    }
////})();

var app = angular.module('homeapp', []);
app.controller("LoginController", function ($scope, $http, $rootScope) {
    $scope.btntext = "Login";
    $scope.login = function () {
        $scope.btn = "Please wait ....!";
        $http({
            method: "POST",
            dataType: 'json',
            url: '/Account/userLogin',
            data: $scope.loginData
        }).then(function (response) {
            $scope.btntext = 'Login';
            
         //   var myJSON = JSON.stringify(response);
            if (response.data == "1") {

                window.location.href = '/Account/dashboard';
                //$rootScope.errorMsg=
                $('#SuccessMessage').modal('show');
            }

            else {
                $rootScope.errorMsg = 'Email or Password is wrong';
                $('#ErrorMessage').modal('show');
             // alert(response.data);

            }

            $scope.user = null;

        }, function (error) {
            alert('failed');
        });

    }
});