import { Meteor } from "meteor/meteor";
import { Check } from "meteor/check";

Meteor.methods({
  "subscribe-to-newsletter" ( email ) {
     check(email, String);

     NewsletterSubscribers.insert({
       _id: email
     });
  }
});
