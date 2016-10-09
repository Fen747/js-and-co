import { Session } from 'meteor/session';

Template.layout.onRendered( function () {
  $(".button-collapse").sideNav({
    menuWidth     : 240, // Default is 240
    edge          : 'left', // Choose the horizontal origin
    closeOnClick  : true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
  $(".dropdown-button").dropdown();
});

Template.layout.events({
  "click #js-logo" ( event , instance ) {
    event.preventDefault();
    event.stopPropagation();

    instance.$(".button-collapse").sideNav('hide');
    FlowRouter.go('/');
  },

  "click #js-signin" ( event, instance ) {
    event.preventDefault();
    event.stopPropagation();

    instance.$(".button-collapse").sideNav('hide');
    instance.$('#signinModal').openModal();
  },

  "click #js-login" ( event, instance ) {
    event.preventDefault();
    event.stopPropagation();

    instance.$(".button-collapse").sideNav('hide');
    instance.$('#loginModal').openModal();
  },

  "click #js-logout" ( event, instance ) {
    event.preventDefault();
    event.stopPropagation();

    instance.$(".button-collapse").sideNav('hide');
    Meteor.logout();
  },

  "click [data-nav]" ( event, instance ) {
    $('html, body').animate( { scrollTop: $( "#" + event.target.dataset.nav ).offset().top }, 2000 );
  }
});
