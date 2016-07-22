import Backbone from 'backbone';

import Dog from '../models/dog';

const DogList = Backbone.Collection.extend({
  url: 'https://best-in-show-dogs.herokuapp.com/dogs',
  matchupMaker: function () {
    let array = [this.get('3'),this.get('5')];
    return array;
  }
});

export default DogList;
