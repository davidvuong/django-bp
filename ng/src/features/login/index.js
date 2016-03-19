import './login.scss';
import angular from 'angular';
import routing from './login.routes';
import LoginController from './login.ctrl';

export default angular.module('app.login', [])
  .config(routing)
  .controller('LoginController', LoginController)
  .name;
