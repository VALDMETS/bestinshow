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

        <div class="profile">
          <div class="container">
            <section class="heading">
              <div class="name" id="name">
                <h3>${currentDog.get('name')}</h3>
                <h4>with ${currentDog.get('vote_count')} votes</h4>
              </div>
            </section>
              <main class="photo" id="photo">
                <img src="${currentDog.get('img_url')}" class="circle-img">
                <section class="voteBox" id="voteBox">VOTES:
                  <div class="voteCount">
                    <p>${currentDog.get('vote_count')}</p>
                  </div>
                </section>
              </main>
          </div>
          <footer class="info" id="info">
            <article class="bio">
              <div class="breed" id="breed">
                <p>${currentDog.get('breed')}</p>
              </div>
              <div class="description" id="description">
                <p>${currentDog.get('description')}</p>
              </div>
            </article>
          </footer>
        </div>

      `);
    }
    return this;
  }
});

export default ProfileView;
