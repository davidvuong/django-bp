export default class HomeController {
  constructor(authentication) {
    this.authentication = authentication;
    this.name = 'Home';

    this.logout = this.logout.bind(this);
  }

  /* Log the user out, refresh page, and delegate redirect. */
  logout() {
    this.authentication.logout();
    location.reload(true);
  }
}
HomeController.$inject = ['authentication'];
