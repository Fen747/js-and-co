import { validateEmail } from "/imports/library/functions.js";
import { MailingList } from '/imports/api/collections/mailingList.js';

Meteor.methods({
  "register-to-mailing-list" ( mail ) {
    check( mail, String );

    if ( !validateEmail( mail ) ) {
      return ( new Meteor.Error("Email invalide", "Veuillez indiquer une adresse email valide.") );
    }

    try {
      MailingList.insert({
        _id       : mail,
        createdAt : new Date().getTime(),
      });
    } catch ( e ) {
      if ( e.errmsg && e.code == 11000 ) {
        return ( new Meteor.Error("Email connu", "On connaissais déjà cet email, mais merci quand même ! :)") );
      } else {
        console.log( e );
      }
    }
  }
});
