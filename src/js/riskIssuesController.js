var app = angular.module("weeklyReports", []);
app.controller("riskIssuesCtrl", function($scope,$http) {
    $http({
        method : "GET",
        url : "../mockData/riskIssues.json"
    }).then(function mySucces(response) {
        $scope.riskReport = response.data;
      });

});
