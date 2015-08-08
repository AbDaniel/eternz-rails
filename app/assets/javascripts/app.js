 var eternzApp = angular.module('eternzApp', ['templates', 'ui.router', 'ngMaterial']);
 eternzApp.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
       $urlRouterProvider.otherwise("/");
       $stateProvider
         .state('index', {
             url: '/',
             templateUrl: "home.html",
             views: {
               'header': {
                 templateUrl: 'header.html'
               },
               'footer': {
                 templateUrl: 'footer.html'
               },
               controller: "CommonController"
             }); $mdThemingProvider.theme('default')
           .dark();
         });
