Template.signinModal.onRendered( function(){
  const self = this;

  $("#signin-form").validate({
    rules: {
      username: {
        required  : true,
        minlength : 4
      },

      email: {
        required  : true,
        email     : true
      },

      password: {
        required  : true,
        minlength : 8
      },

      "confirm-password": {
        required  : true,
        minlength : 8
      },
    },

    messages: {
      username: {
        required: "Username",
      },

      email: {
        required: "Email address",
        email   : "Please enter a valid email address"
      },

      password: {
        required: "Password",
        password: "Please use at least 8 characters"
      },

      "confirm-password": {
        required: "Confirm password",
      },
    },

    submitHandler: function () {
      let credentials = {
        username  : self.$("[name=username]").val(),
        email     : self.$("[name=email]").val(),
        password  : self.$("[name=password]").val()
      };

      console.log(credentials);

      Accounts.createUser( credentials, ( error, result ) => {
        if ( error ) {
          Bert.alert({
            title   : "An error occured",
            message : error.message,
            type    : "danger"
          });
        } else {
          $('#signinModal').closeModal();

          Bert.alert({
            title   : "Congratulation! Your account has been created successfully",
            message : "Please, now, validate your Email.",
            type    : "success"
          });
        }
      });
    }
  });
});

Template.signinModal.events({
  "submit #signin-form" ( event, template ) {
    event.preventDefault();
    event.stopPropagation();
  }
});
