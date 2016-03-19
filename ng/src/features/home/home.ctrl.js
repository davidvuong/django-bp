export default class HomeController {
  constructor(authentication) {
    this.authentication = authentication;
    this.name = 'Home';

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.authentication.logout();
    location.reload(true);
  }
}
HomeController.$inject = ['authentication'];
