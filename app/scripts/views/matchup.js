import $ from 'jquery';
import Backbone from 'backbone';

import store from '../store';

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
    //NEED TO MAKE RANDOM IDS NOT MATCH
    // function dontMatch (a,b) {
    //   if (a===b) {
    //     let b = Math.ceil(Math.random()*store.dogList.length);
    //     dontMatch(randomA,b);
    //   }
    // }
    // dontMatch(randomA,randomB);
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
      console.log($(this).data().id);
      // NEED TO HAVE A DEFAULT VOTE VALUE TO WORK!
      // store.dogList.get($(this).data().id).set({
      //   votes: store.dogList.get($(this).data().id).get('votes') + 1
      // });

      // THEN SAVE TO SERVER

      // add in any swifty movey stuff before re-rendering

      // VVV MAY BE UNNECESSARY, AS IT IS LISTENING FOR CHANGES TO LIST
      self.render();
    });
    return this;
  },
});

export default Matchup;
