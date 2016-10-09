import { validateEmail } from "/imports/library/functions.js";

Template.homepage.onRendered(function() {
  $('.parallax').parallax();

  this.autorun( computation => {
    if ( particlesJS ) {
      particlesJS.load( 'particles-js', "assets/particles.json", function () {} );
    }
  });
});

Template.homepage.events({
  "click #js-send-mail" ( event, template ) {
    let email = $("#js-email").val();

    if ( validateEmail( email ) ) {
      Meteor.call("subscribe-to-newsletter", email, ( error, result ) => {
        if ( error ) {

        } else {

        }
      });
    } else {

    }
  }
});
