import angular from 'angular';
import config from './config';

class Authentication {
  constructor($q, request) {
    this.$q = $q;
    this.request = request;

    this.current = null;
    this.token = localStorage.getItem(config.AUTH_KEY);
  }

  hasAuthorized() {
    return !!this.current;
  }

  isAuthorized() {
    return !!this.token;
  }

  /* Makes a HTTP request to authorize with email/password. */
  authorize(email, password) {
    const deferred = this.$q.defer();
    if (!email || !password) {
      deferred.reject();
      return deferred.promise;
    }
    if (this.hasAuthorized()) {
      deferred.resolve(this.current);
      return deferred.promise;
    }

    this.request.post('/api/auth/authenticate/', { email, password }).then((res) => {
      this.current = res.data.user;
      this.token = res.data.token;

      localStorage.setItem(config.AUTH_KEY, this.token);
      deferred.resolve(this.current);
    }, deferred.reject);
    return deferred.promise;
  }

  /* Makes a HTTP request to authorize the user with just the token. */
  authorizeWithToken() {
    const deferred = this.$q.defer();
    if (this.hasAuthorized()) {
      deferred.resolve(this.current);
      return deferred.promise;
    }

    this.request.post('/api/auth/authenticate/', {}).then((res) => {
      this.current = res.data.user;
      deferred.resolve(this.current);
    }, deferred.reject);
    return deferred.promise;
  }

  logout() {
    if (!this.isAuthorized()) { return; }

    localStorage.removeItem(config.AUTH_KEY);
    this.current = null;
    this.token = null;
  }
}

export default angular.module('services.auth', [])
  .service('authentication', Authentication)
  .name;
Authentication.$inject = ['$q', 'request'];
