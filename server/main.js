import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Accounts.onCreateUser( function ( options, user ) {
     //TODO controler les variables
     /*if ( ... ) {
       Accounts.sendVerificationEmail( user._id );
     }*/
    return ( user );
  });
});
