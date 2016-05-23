var app = angular.module("weeklyReports", []);
app.controller("riskIssuesCtrl", function($scope,$http) {
      console.log("hheyyyy1");
    $http({
        method : "GET",
        url : "../mockData"
    }).then(function mySucces(response) {
        $scope.myWelcome = response.data;
        console.log("hheyyyy2",$scope.myWelcome);
      });

});
