import Backbone from 'backbone';

const Dog = Backbone.Model.extend({
  urlRoot: 'https://best-in-show-dogs.herokuapp.com/dogs',
  defaults: {
    id: '',
    name: '',
    breed: '',
    description: '',
    image: '',
    votes: 0
  }
});

export default Dog;
