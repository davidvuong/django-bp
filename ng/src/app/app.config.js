'use strict';

export default function config($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.when('/', $state => {
    $state.go('home');
  });
  $urlRouterProvider.otherwise('/');
}
config.$inject = ['$urlRouterProvider', '$locationProvider'];
