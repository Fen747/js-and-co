import { Meteor } from 'meteor/meteor';

import { MailingList } from '/imports/api/collections/mailingList.js';

import "/imports/api/methods/private/mailingList.js";

Meteor.startup(() => {
  Accounts.onCreateUser( function ( options, user ) {
     //TODO controler les variables
     /*if ( ... ) {
       Accounts.sendVerificationEmail( user._id );
     }*/
    return ( user );
  });
});
