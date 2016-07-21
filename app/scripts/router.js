import $ from 'jquery';
import Backbone from 'backbone';

import DogsView from './views/dogs';

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
    let dogsView = new DogsView();
    $('main').empty().append(dogsView.render().$el);
  },
  submitFunction: function () {
    console.log('submit');
  },
  profileFunction: function (id) {
    console.log(id);
  }
});

const router = new Router();

export default router;
