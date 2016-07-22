import $ from 'jquery';
import Backbone from 'backbone';

import Matchup from './views/matchup';
import Top5View from './views/top5'
;import DogsView from './views/dogs';
import ProfileView from './views/profile';
import SubmitView from './views/submit';
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
    let matchup = new Matchup();
    // console.log(store.dogList.matchupMaker());
    // let top5View = new Top5View();
    // let matchup = new Matchup();
    // $('main').empty().append(top5View.render().$el).append(matchup.render().$el);

    $('main').empty().append(matchup.$el);
  },
  dogsFunction: function () {
    let dogsView = new DogsView();
    $('main').empty().append(dogsView.render().$el);
  },
  submitFunction: function () {
    let submitView = new SubmitView();
    $('main').empty().append(submitView.render().$el);
  },
  profileFunction: function (id) {
    let profileView = new ProfileView(id);
    $('main').empty().append(profileView.render(id).$el);
  }
});

const router = new Router();

export default router;
