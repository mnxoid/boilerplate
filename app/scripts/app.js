'use strict';

/**
 * @ngdoc overview
 * @name mnxoidappApp
 * @description
 * # mnxoidappApp
 *
 * Main module of the application.
 */
angular
  .module('mnxoidappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/experiment', {
        templateUrl: 'views/experiment.html',
        controller: 'ExpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
