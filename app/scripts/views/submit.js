import $ from 'jquery';
import Backbone from 'backbone';

import store from '../store';
import Dog from '../models/dog';

const SubmitView = Backbone.View.extend({
  tagName: 'section',
  className: 'dogsubmit',

  render: function () {
    this.$el.html('');
      this.$el.append(`
        <form>
          <h3>Submit a New Dog!</h3>
          <input type="text" id="newdogname" placeholder="Dog's Name">
          <input type="text" id="newdogimage" placeholder="Link to your dog's picture">
          <input type="text" id="newdogbreed" placeholder="Dog's Breed">
          <input type="text" id="newdogdescription" placeholder="Tell the world about your dog!">
          <input type="submit" id="newdogsubmit">
      `);
    return this;
  },
  events: {
    'submit' : 'newDogSend'
  },
  newDogSend: function (e){
    e.preventDefault();
    store.dogList.create({
      name: $('#newdogname').val(),
      breed: $('#newdogbreed').val(),
      description: $('#newdogdescription').val(),
      img_url: $('#newdogimage').val()
      //NEED SERVER TO RETURN SUCCESS
      // success: function () {
      //   router.navigate('matchup', {trigger:true});
      // }
    });
  }
});

export default SubmitView;
