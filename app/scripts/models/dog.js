import Backbone from 'backbone';

const Dog = Backbone.Model.extend({
  urlRoot: 'https://best-in-show-dogs.herokuapp.com',
  defaults: {
    id: '',
    name: '',
    breed: '',
    description: '',
    img_url: '',
    votes: 0
  }
});

export default Dog;
