import $ from 'jquery';
import Backbone from 'backbone';

import DogRank from './dogrank';
import store from '../store';

const DogsView = Backbone.View.extend({
  initialize: function ( rankIndex ){
    store.dogList.on( 'update', () => {
      this.render();
    });
    store.dogList.fetch();
  },
  tagName: 'section',
  className: 'doglist',

template : function(){
  return `
  <li>
    <div class="leaderboard-dog-item">
      <div class="col avatar" id="avatar">
          <img class="img-circle" src="${currentDog.get('pic')}">
      </div>
      <div class="col info" id="info">
          <h3> ${currentDog.get('name')} </h3>
          <h4>${currentDog.get('breed')} </h4>
          <p> ${currentDog.get('description')} </p>
      </div>
      <div class="col rank" id="rank">
        <div class="rankBadge">
            <h2> ${currentDog.get('rankBadge')} </h2>
        </div>
      </div>
  </div>
  </li>
  `;
},

  render: function () {
    this.$el.html('');
    store.dogList.forEach((dog, i) => {
      let dogRank = new DogRank();
      this.$el.append(dogRank.render( dog, i).$el);
    });
    return this;
  }
});

export default DogsView;
