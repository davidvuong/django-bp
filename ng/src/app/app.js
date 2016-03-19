'use strict';
import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './app.config';
import login from '../features/login';
import home from '../features/home';

angular.module('app', [
  uirouter,
  login,
  home
]).config(config);
