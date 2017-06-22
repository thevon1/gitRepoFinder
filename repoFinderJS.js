var repoApp = angular.module('repoFinderApp', ['angular-loading-bar']);

repoApp.controller('repoCtrl', function ($scope) {
	
	function reqListener () {
  		document.getElementById("repo-return-box").innerHTML = JSON.parse(this.responseText);
}

var openReq = new XMLHttpRequest();
openReq.addEventListener("load", reqListener);
openReq.open("GET", "https://api.github.com/repositories");
openReq.send();

});


