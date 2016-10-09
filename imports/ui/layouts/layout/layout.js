import { Session } from 'meteor/session';

Template.layout.onRendered( function () {
  $(".button-collapse").sideNav();
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
  }
});
