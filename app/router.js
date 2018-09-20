import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('legislativo');
  this.route('biblioteca');
  this.route('objetivo');
  this.route('nosotros');
});

export default Router;
