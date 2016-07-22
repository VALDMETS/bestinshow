import $ from 'jquery';
import Backbone from 'backbone';

// import Dog from '../models/dog';
// import DogList from '../collections/doglist';
import DogRank from './dogrank';
import store from '../store';

const DogsView = Backbone.View.extend({
  initialize: function (rankIndex){
    // let dogList = new DogList();
    store.dogList.on('update', () => {
      this.render();
    });
    store.dogList.fetch({
      success: function () {
        console.log(store.dogList);
      },
      error: function () {
        console.log('things died');
      }
    });

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
