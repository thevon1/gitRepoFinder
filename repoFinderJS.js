var repoApp = angular.module('repoFinderApp', ['angular-loading-bar']);

repoApp.controller('repoCtrl', function($scope, $http) {

    $http.get("https://api.github.com/repositories")
    .then(function(reqInfo) {
        $scope.repos = reqInfo.data;
    });
});








// the example at the bottom shows an example of them ***assigning an array to scope***, 
// then ***using ng-repeat to iterate over each item***.

// The example also has an example of an ***input filter*** in the ng-repeat 
// expression most of  the code you need is right there in that example, 
// with the exception of property names etc.  You'll have to change that 
// for your assignment