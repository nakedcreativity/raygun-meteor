Raygun = {
	options: {}
};
raygun = Npm.require('raygun');

Raygun.init = function(options){

	Raygun.options = options;
	RaygunClient = new raygun.Client().init({ apiKey: options.key });

    // catch exceptions thrown by Meteor
  	Meteor._debug = function (message, stack) {
    	if(Raygun.options.console){
        console.log(message)
      }
    	Raygun.send(new Error(message));
  	};

    // catch uncaught exceptions
  	process.on('uncaughtException', function(err) {
    	if(Raygun.options.console){
        console.log(err)
      }
    	Raygun.send(err);
  	});

};

Raygun.send = function(message){
  if(Raygun.options.console){
    console.log(message)
  }
	RaygunClient.send(new Error(message));
};