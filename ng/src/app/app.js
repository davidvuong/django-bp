import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import common from '../features/common';
import login from '../features/login';
import home from '../features/home';

/* Global application configuration. */
function config($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.when('/', $state => {
    $state.go('home');
  });
  $urlRouterProvider.otherwise('/');
}
config.$inject = ['$urlRouterProvider', '$locationProvider'];

function run($rootScope, $state, authentication) {
  $rootScope.$on('$stateChangeStart', function (event, toState) {
    const isAuthorized = authentication.isAuthorized();

    // Redirect to login page if not authenticated.
    if (!isAuthorized && toState.name !== 'login') {
      event.preventDefault();
      return $state.transitionTo('login');
    }

    // Redirect to home page if authenticated.
    if (toState.name === 'login' && isAuthorized) {
      event.preventDefault();
      return $state.transitionTo('home');
    }
  });
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error(error);
  });
}
run.$inject = ['$rootScope', '$state', 'authentication'];

/* Global application dependencies. */
angular.module('app', [
  uirouter,
  common,
  login,
  home
])
  .config(config)
  .run(run);
