import $ from 'jquery';
import Backbone from 'backbone';

import DogsView from './views/dogs';
import store from './store';

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
    let dogsView = new DogsView();
    $('main').empty().append(dogsView.render().$el);
  },
  submitFunction: function () {
    console.log('submit');
  },
  profileFunction: function (id) {
    console.log(id);
    console.log(store.dogList);
  }
});

const router = new Router();

export default router;
