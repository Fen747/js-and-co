import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import "/imports/ui/layouts/layout_splash";
import "/imports/router/exposed.js";

Template.body.onRendered( function(){
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
});
