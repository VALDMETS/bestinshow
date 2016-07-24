import $ from 'jquery';
import Backbone from 'backbone';

const navBar = Backbone.View.extend({

  tagName: 'nav',
  className: 'navbar',
  id: 'navbar'

  template: function(){
    return `
    <nav id="navbar">
      <ul>
        <li> <a href="#home">HOME</a> </li>
        <li> <a href="#dogs">DOGS</a> </li>
        <li> <a href="#submit">SUBMIT</a> </li>
      </ul>
    </nav>
    `
  }
});//close backbone extend
