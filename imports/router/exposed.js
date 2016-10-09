import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { exposedRoutes } from './_config.js';

exposedRoutes.route("/", {
  action ( query, queryParams ) {
    BlazeLayout.render( "layout", {
      main    : "homepage",
    } );
  }
});
