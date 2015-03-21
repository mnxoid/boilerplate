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
  .config(["$routeProvider", function ($routeProvider) {
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
  }]);

'use strict';

/**
 * @ngdoc function
 * @name mnxoidappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnxoidappApp
 */
angular.module('mnxoidappApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name mnxoidappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mnxoidappApp
 */
angular.module('mnxoidappApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
