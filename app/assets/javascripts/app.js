 var eternzApp = angular.module('eternzApp', ['templates', 'ui.router', 'ngMaterial']);
 eternzApp.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
   $urlRouterProvider.otherwise("index");
   $stateProvider
     .state('index', {
       url: '/',
       views : {
         "": {
           templateUrl: 'home.html'
         },
         "header@index" : {
           templateUrl: 'header.html'
         }
       }
     });
   $mdThemingProvider.theme('default')
     .dark();
 });
