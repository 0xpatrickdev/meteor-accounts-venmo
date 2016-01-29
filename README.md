## Venmo account login for meteor

A wrapper for connecting Venmo to the Meteor user account system. See the project page on [Meteor Accounts](https://www.meteor.com/accounts) for more details.

The Venmo OAuth (2.0) API allows your application to perform several funcitons, each of which are scoped/requested individually to ensure privacy, transparecny, and security.  Currently, the available scopes are:
- *make_payments* - make transactions (payments and requests) on the authenticated user’s behalf
- *access_payment_history* - see the authenticated user's payment history
- *access_feed* - see posts on the authenticated user’s feed
- *access_profile* - see the authenticated user's basic profile information
- *access_email* - see the authenticated user's primary email address
- *access_phone* - see the authenticated user's phone number
- *access_balance* - see the authenticated user's balance
- *access_friends* - see the authenticated user’s friend list

## Install

`cd <your-meteor-project>`

`meteor add pcooney10:accounts-venmo`

and also add following package as pre-req -

`meteor add service-configuration`


## Setup and Usage
1. Register your app with Venmo Developer Site at the following url: https://venmo.com/account/settings/developer

2. Complete the form, setting your redirect url to the following format:

  OAuth redirect_uri:`<your-server-domain>:<port>/_oauth/venmo`

  For e.g.redirect url for localhost : `http://localhost:3000/_oauth/venmo`

3. After registration, note down the clientId and client secret.
4. Add the following code to a `Meteor.startup` function on the server, inputting your clientId, secret, and any scopes you wish to use. A full list of scopes is available here: url- https://developer.venmo.com/docs/authentication#scopes

    ```
    ServiceConfiguration.configurations.upsert({
      service: "venmo"
      }, {
        $set {
          clientId: "<clientId>",
          scope: "<scop1e+scope2+...>",
          secret: "<secret>"
        }
    });
    ```

5. The login method can now be exposed on the client with the following code:

    ```
    Meteor.loginWithVenmo(function (err) {
      if (err) {
        throw new Meteor.Error("login-failed", 
          "Authentication with Venmo failed");
      }
    });
    ```
6. And you can logout on the client with the following code:

    ```
    Meteor.logout(function(err){
      if (err) {
        throw new Meteor.Error("logout-failed",
          "Log out failed");
      }
    });
    ```
