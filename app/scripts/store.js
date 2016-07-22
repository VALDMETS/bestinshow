import $ from 'jquery';
import Backbone from 'backbone';

import Dog from './models/dog';
import DogList from './collections/doglist';

export default {
    // dogList: [{
    //   id: 235235236,
    //   name: 'Bobo',
    //   breed: 'Chihuahua',
    //   description: 'Small boy',
    //   image: '',
    //   votes: 0
    // }, {
    //   id: '523236236',
    //   name: 'Dingler',
    //   breed: 'Spaniel',
    //   description: 'Medium girl',
    //   image: '',
    //   votes: 0
    // }],
    dogList: new DogList(),
    dogTop5: new DogList(),
    dogMatchup: new DogList()
};
