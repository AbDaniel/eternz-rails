 var eternzApp = angular.module('eternzApp', ['templates','ui.router']);
eternzApp.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state('index',{
    url: '/',
    templateUrl: "index.html"
  })
  .state('index.home',{
    url: '/home',
    templateUrl: "home.html"
  });
  $urlRouterProvider.otherwise("/");
});
