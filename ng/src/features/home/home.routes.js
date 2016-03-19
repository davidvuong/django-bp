export default function routes($stateProvider, resolverProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home',
      resolve: { __: resolverProvider.$get }
    });
}
routes.$inject = ['$stateProvider', 'resolverProvider'];
