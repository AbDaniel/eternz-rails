 var eternzApp = angular.module('eternzApp', ['templates', 'ui.router', 'ngMaterial']);
 eternzApp.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
   $urlRouterProvider.otherwise("/");
   $stateProvider
     .state('index', {
       url: '/',
       views: {
         '': {
           templateUrl: 'home.html'
         },
         'header@index': {
           templateUrl: 'header.html'
         },
         'content@index': {
           templateUrl: 'content.html'
         },
         'footer@index': {
           templateUrl: 'footer.html'
         }
       }
     });
   $mdThemingProvider.theme('default').dark();
 });
