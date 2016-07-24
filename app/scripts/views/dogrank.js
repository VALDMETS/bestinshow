import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import Dog from '../models/dog';
import DogList from '../collections/doglist';

const DogRank = Backbone.View.extend({
  initialize: function (dog, rankIndex){


  },
  tagName: 'div',
  className: 'dogrankitem',
  render: function (dog, i) {
    this.$el.data().id = dog.id;
    this.$el.append(`
      <span class="rank">#${i+1}</span>
      <div class="dogimageleaderboard">
        <img src="${dog.get('img_url')}">
      </div>
      <span class="dogname">${dog.get('name')}</span>
      `);
    return this;
  },
  events: {
    'click' : 'goProfileFunction'
  },
  goProfileFunction: function () {
    router.navigate(('dogs/' + this.$el.data().id), {trigger: true});
  }
});

export default DogRank;
