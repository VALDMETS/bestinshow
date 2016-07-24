import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import DogRank from './dogrank';
import store from '../store';
import router from '../router';

const DogsView = Backbone.View.extend({
  initialize: function (rankIndex){
    store.dogTop5.on('update', () => {
      this.render();
    });
    store.dogTop5.fetch();
  },
  tagName: 'section',
  className: 'top5widget',
  render: function () {
    this.$el.html('');
    for (var i = 0; i < 5; i++) {
      this.$el.append(`
        <div class="top5dog">
          <span>#${i+1}</span>
          <span>${store.dogTop5.models[i].get('name')}</span>
        </div>
        `);
    }
    return this;
  },
  events: {
    'click': 'goToDogsFunction'
  },
  goToDogsFunction: function () {
    router.navigate('dogs', {trigger: true});
  }
});

export default DogsView;
