import { BlazeLayout } from "meteor/kadira:blaze-layout";
import { FlowRouter } from "meteor/kadira:flow-router";
import { Meteor } from "meteor/meteor";

if ( Meteor.isClient ) Meteor.startup( () => { BlazeLayout.setRoot("body"); });

export const Routes = FlowRouter.group({
  name          : "routes",
  triggersEnter : [

  ]
});

export const exposedRoutes = Routes.group({
  name          : "routes",
  triggersEnter : [

  ]
});
