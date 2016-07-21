import $ from 'jquery';
import Backbone from 'backbone';

const Router = Backbone.Router.extend({

  routes: {
    'matchup' : 'matchupFunction',
    'dogs'    : 'dogsFunction',
    'submit'  : 'submitFunction',
    'dogs/:id': 'profileFunction',
    '/*'       : 'matchupFunction'
  },
  matchupFunction: function () {
    console.log('matchup');
  },
  dogsFunction: function () {
    console.log('dogs');
  },
  submitFunction: function () {
    console.log('submit');
  },
  profileFunction: function () {
    console.log('profile');
  }
});

const router = new Router();

export default router;
