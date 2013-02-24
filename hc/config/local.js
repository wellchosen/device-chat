var config = module.exports = {

		auth: {
			    twitter: {
			      consumerkey : "sP5LDNIF1x975XTcqUerg",
			      consumersecret : "pHYRHZ3h6sqmKmgXcP6GSus3Ol7CQHNf82U3xK5I",
			      callback : "http://172.20.10.8/v1/authfb/callback"
			    },
			    facebook: {
			      clientid : "511896482182702",
			      clientsecret : "325932d8cb9394a0d4ded317daa44c3e",
			      callback : "http://172.20.10.8/v1/authfb/callback"
			    }
		}
};
module.exports.local = function(req,res,next){

	req.local = config;
	return next();
};