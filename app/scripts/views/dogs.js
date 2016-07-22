import $ from 'jquery';
import Backbone from 'backbone';

import DogRank from './dogrank';
import store from '../store';

const DogsView = Backbone.View.extend({
  initialize: function (rankIndex){
    store.dogList.on('update', () => {
      this.render();
    });
    store.dogList.fetch();
  },
  tagName: 'section',
  className: 'doglist',
  render: function () {
    this.$el.html('');
    store.dogList.forEach((dog, i) => {
      let dogRank = new DogRank();
      this.$el.append(dogRank.render(dog, i).$el);
    });
    return this;
  }
});

export default DogsView;
