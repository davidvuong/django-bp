'use strict';

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}
routes.$inject = ['$stateProvider'];
