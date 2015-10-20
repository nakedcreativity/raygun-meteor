##Intro
Extends Raygun NPM package https://www.npmjs.com/package/raygun

Catches exceptions thrown by Meteor, and uncaught exceptions, and logs these to Raygun automatically.

Can also be used to manually catch and log errors using Raygun.send(err)

To-do: 
- write some tests
- link up rest of node package functions and options
- add client-side method to log browser errors and exceptions

##Installation
Add package using 'meteor install nakedcreativity:raygun'

Add 'Raygun.init(options)' to 'Meteor.startup()' on the server, ie:

	Meteor.startup(function () {
		Raygun.init({
    		key: Meteor.settings.raygun.key,
    		console: Meteor.settings.raygun.console
  		});
	});

where 'Meteor.settings.raygun.key' is your application's API key, stored in an environment variable. 

The 'console' option determines whether the error is also logged to the error log, which may be useful in development or local environments.