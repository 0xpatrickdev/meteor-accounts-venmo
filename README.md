# Meteor Acccounts Venmo
#### Venmo account login for meteor

##Install

`cd <your-meteor-project>`

`meteor add pcooney10:accounts-venmo`

and also add following package as pre-req -

`meteor add service-configuration`


##Setup and Usage
1. Register your app with Venmo Developer Site at following url- https://venmo.com/account/settings/developer

2. Fill out the given form but make sure that redirect url as shown as follows-

  OAuth redirect_uri:`<your-server-domain>:<port>/_oauth/venmo`

  For e.g.redirect url for localhost : `http://localhost:3000/_oauth/venmo`

3. After registration, note down the clientid and client secret.
4. Add the following code to a `Meteor.startup` function on the server, inputting your clientId, secret, and any scopes you wish to use. A full list is available here: url- https://developer.venmo.com/docs/authentication#scopes

    ```
    ServiceConfiguration.configurations.remove({
      service: "venmo"
    });
    ServiceConfiguration.configurations.insert({
      service: "venmo",
      clientId: "<clientId>",
      scope: "<scop1e+scope2+...>",
      secret: "<secret>"
    });
    ```

5. The login method can now be exposed on the client with the following code:
```
      Meteor.loginWithVenmo(function (err, res) {
          if (err !== undefined)
            console.log('sucess ' + res)
          else
            console.log('login failed ' + err)
      });
```