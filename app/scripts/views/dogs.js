import $ from 'jquery';
import Backbone from 'backbone';

import Dog from '../models/dog';
import DogList from '../collections/doglist';
import DogRank from './dogrank';

//temporary list definition

// let tempDogList = new DogList();
// tempDogList.add

const DogsView = Backbone.View.extend({
  initialize: function (rankIndex){
    // let dogList = new DogList();


  },
  tagName: 'section',
  className: 'doglist',

  render: function () {
    let dogList = [{
      id: 235235236,
      name: 'Bobo',
      breed: 'Chihuahua',
      description: 'Small boy',
      image: '',
      votes: 0
    }, {
      id: '523236236',
      name: 'Dingler',
      breed: 'Spaniel',
      description: 'Medium girl',
      image: '',
      votes: 0
    }];

    this.$el.html('');
    dogList.forEach((dog, i) => {
      let dogRank = new DogRank();
      this.$el.append(dogRank.render(dog, i).$el);
    });

    return this;
  },
  // events: {
  //   'click .dogrankitem' : 'goProfileFunction'
  // },
  // goProfileFunction: function (evt) {
  //
  // }
});

export default DogsView;
