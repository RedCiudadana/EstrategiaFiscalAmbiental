import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('legislativo');
  this.route('objetivo');
  this.route('nosotros');
  this.route('biblioteca', function() {
    this.route('eje1');
    this.route('eje2');
    this.route('eje3');
    this.route('eje4');
    this.route('estrategia-ambiental');
  });
  this.route('mision');
  this.route('vision');
});

export default Router;
