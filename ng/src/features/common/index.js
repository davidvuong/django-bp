import angular from 'angular';
import request from './request'
import authentication from './authentication';
import resolver from './resolver';

export default angular.module('app.common', [
  request,
  authentication,
  resolver
]).name;
