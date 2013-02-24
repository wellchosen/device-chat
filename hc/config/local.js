var config = module.exports = {

		auth: {
			    twitter: {
			      consumerkey : "sP5LDNIF1x975XTcqUerg",
			      consumersecret : "pHYRHZ3h6sqmKmgXcP6GSus3Ol7CQHNf82U3xK5I",
			      callback : "http://172.20.10.8/v1/authfb/callback"
			    },
			    facebook: {
			      clientid : "329613163813777",
			      clientsecret : "05fd646b7ba719c7a64a6f2608d4fc86",
			      callback : "http://172.20.10.8/v1/authfb/callback"
			    }
		}
};
module.exports.local = function(req,res,next){

	req.local = config;
	return next();
};