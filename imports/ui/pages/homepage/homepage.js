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
    event.stopPropagation();
    event.preventDefault();

    let email = $("#js-email").val();

    if ( validateEmail( email ) ) {
      Meteor.call("register-to-mailing-list", email, ( error, response ) => {
        if ( error ) {
          Bert.alert({
      			title			: "Une erreur est survenue",
      			message		: error.message,
      			type			: "danger"
    		  });
        } else if ( response && response.error ) {
          Bert.alert({
      			title			: "Une erreur est survenue",
      			message		: response.reason,
      			type			: "danger"
    		  });
        } else {
          Bert.alert({
            title			: "Merci ! :)",
            message		: "Votre adresse a bien été enregistrée.",
            type			: "success"
          });
        }
      });
    } else {
      Bert.alert({
        title			: "Veuillez rentrer une adresse email valide.",
        type			: "danger"
      });
    }
  }
});
