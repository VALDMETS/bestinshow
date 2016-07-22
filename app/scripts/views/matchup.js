import $ from 'jquery';
import Backbone from 'backbone';

import store from '../store';
import Dog from '../models/dog';

const Matchup = Backbone.View.extend({
  initialize: function (){
    store.dogList.on('update', () => {
      this.render();
    });
    store.dogList.fetch();
  },
  tagName: 'section',
  className: 'matchup',

  render: function () {
    this.$el.html('');
    let self = this;
    let randomA = Math.ceil(Math.random()*store.dogList.length);
    let randomB = Math.ceil(Math.random()*store.dogList.length);
    while(randomA===randomB) {
      randomB = Math.ceil(Math.random()*store.dogList.length);
    }
    let currentDog = store.dogList.get(randomA);
      this.$el.append(`
        <div class="dogvote" data-id="${randomA}">
          <h3>${currentDog.get('name')}</h3>
          <img class="profileimage">
        </div>
      `);
    currentDog = store.dogList.get(randomB);
      this.$el.append(`
        <div class="dogvote" data-id="${randomB}">
          <h3>${currentDog.get('name')}</h3>
          <img class="profileimage">
        </div>
      `);
    $('.dogvote').click(function(){
        let currentDog = new Dog();
        currentDog = store.dogList.get($(this).data().id);
      console.log(currentDog.get('id'));
      $.ajax({
        url: 'https://best-in-show-dogs.herokuapp.com/votes',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
          dog_id: currentDog.get('id')
        })
      });

      console.log(currentDog);

      // add in any swifty movey stuff before re-rendering

      // VVV MAY BE UNNECESSARY, AS IT IS LISTENING FOR CHANGES TO LIST
      self.render();
    });
    return this;
  },
});

export default Matchup;
