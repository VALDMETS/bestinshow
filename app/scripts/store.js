import $ from 'jquery';
import Backbone from 'backbone';

import Dog from './models/dog';
import DogList from './collections/doglist';

export default {
    dogList: new DogList(),
    dogTop5: new DogList(),
    dogMatchup: new DogList()
};
