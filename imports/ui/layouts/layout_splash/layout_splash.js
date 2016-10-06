function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

Template.layout_splash.events({
  "click #js-send-mail" (event, template) {
    let email = $("#js-email").val();

    if ( validateEmail(email) ) {
      Meteor.call("subscribe-to-newsletter", email, function( error, result ) {
        if (error) {
          
        } else {

        }
      });
    } else {

    }
  }
});
