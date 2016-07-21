import Backbone from 'backbone';

import Dog from '../models/dog';

const DogList = Backbone.Collection.extend({
  url: 'https://best-in-show-dogs.herokuapp.com/dogs'
});

export default DogList;
