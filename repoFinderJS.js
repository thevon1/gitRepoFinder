var repoApp = angular.module('repoFinderApp', ['angular-loading-bar']);

repoApp.controller('repoCtrl', function ($scope) {
	$scope.searchInput = function (reqSearchItem) {
		$scope.searchItem = reqSearchItem;
	}

	$scope.fetchJSON = function (someSearchName) {
		// https://api.github.com/repositories
	}

});


// *************
// function requestListener(){
//      var file = JSON.parse(this.responseText);
//      console.log(file[0]);
     
    
// }

// var openRequest = new XMLHttpRequest();

// openRequest.addEventListener("load", requestListener);
// openRequest.open("GET", "https://api.github.com/orgs/kogosoftwarellc/repos");
// openRequest.send();

// ******************



// var calcApp = angular.module('calcApp', []);

// calcApp.controller('calcCtrl', function ($scope) {
//     $scope.leftOperand = "";
//     $scope.operator = "";
//     $scope.rightOperand = "";
//     $scope.answer = "";


//     $scope.setOperand = function (operandEntered) {
//         if ($scope.operator){
//             $scope.rightOperand += operandEntered;
//         }
//         else {
//             $scope.leftOperand += operandEntered;
//         };
//     };
