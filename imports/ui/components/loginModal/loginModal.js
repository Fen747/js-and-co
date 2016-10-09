Template.loginModal.events({
  "submit #login-form" ( event, instance ) {
    event.preventDefault();

    const ident = instance.$("#email").val(),
          password = instance.$("#password").val();
          console.log(ident, password);

    Meteor.loginWithPassword( ident, password, ( err ) => {
      if ( err ) {
  		  Bert.alert({
    			title			: "An error occured",
    			message		: err.message,
    			type			: "danger"
  		  });
  	  } else {

      }
    });
  }
});
