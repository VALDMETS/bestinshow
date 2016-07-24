import $ from 'jquery';
import Backbone from 'backbone';

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
  className: 'top5widget',
  render: function () {
    this.$el.html('');
    console.log(store.dogTop5.get('2'));
    for (var i = 0; i < 5; i++) {
      this.$el.append(`
        <div class="top5dog">
          <h3>${i+1}</h3>
          <span>${store.dogTop5.get( String(i+1) ).get('name')}</span>
          <img src="${store.dogTop5.get( String(i+1)).get('thumb')}"
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
