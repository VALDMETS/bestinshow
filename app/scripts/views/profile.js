import $ from 'jquery';
import Backbone from 'backbone';

import store from '../store';

const ProfileView = Backbone.View.extend({
  initialize: function (id){
    if (!store.dogList.get(id)) {
      store.dogList.fetch({
        success: () => {
          this.render(id);
        }
      });
    }
  },
  tagName: 'section',
  className: 'dogprofile',

  render: function (id) {
    let currentDog = store.dogList.get(id);
    this.$el.html('');
    if (currentDog) {
      this.$el.append(`
        <h3>${currentDog.get('name')}</h3>
        <p>with ${currentDog.get('vote_count')} votes</p>
        <div class="dogimage">
          <img src="${currentDog.get('img_url')}">
        </div>
        <p>${currentDog.get('breed')}</p>
        <p>${currentDog.get('description')}</p>

      `);
    }
    return this;
  }
});

export default ProfileView;
