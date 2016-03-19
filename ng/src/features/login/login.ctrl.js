export default class LoginController {
  constructor($location, authentication) {
    this.$location = $location;
    this.authentication = authentication;
    this.name = 'Login';

    this.authorize = this.authorize.bind(this);
  }

  authorize() {
    this.authentication.authorize(this.email, this.password).then((res) => {
      this.$location.path('/home');
    }, (err) => {
      console.log(err);
    });
  }
}
LoginController.$inject = ['$location', 'authentication'];
