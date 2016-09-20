var jwt = require('jwt-simple'),
mongoose = require('mongoose'),
request = require('request'),
moment = require('moment'),
User = mongoose.model('User'),
config = require('../config/config');

module.exports.googleAuth = function (req, res) {
	var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token',
		peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect',
		params = {
			code: req.body.code,
			client_id: req.body.clientId,
			client_secret: config.GOOGLE_SECRET,
			redirect_uri: req.body.redirectUri,
			grant_type: 'authorization_code'
		};


	request.post(accessTokenUrl, {
		json: true,
		form: params
	}, function (err, response, token) {
		var accessToken = token.access_token,
			headers = {
				Authorization: 'Bearer ' + accessToken
			};
		request.get({
			url: peopleApiUrl,
			headers: headers,
			json: true
		}, function (err, response, profile) {
			if (profile.error) {
				return res.status(500).send({
					message: profile.error.message
				});
			}

			if (req.header('Authorization')) {
				User.findOne({
					google: profile.sub
				}, function (err, existingUser) {
					if (existingUser) {
						return res.status(409).send({
							message: 'There is already a Google account that belongs to you'
						});
					}
					var token = req.header('Authorization').split(' ')[1],
						payload = jwt.decode(token, config.TOKEN_SECRET);
					User.findById(payload.sub, function (err, user) {
						if (!user) {
							return res.status(400).send({
								message: 'User not found'
							});
						}
						user.google = profile.sub;
						user.email = profile.email;
						user.picture = user.picture || profile.picture.replace('sz=100', 'sz=100');
						user.displayName = user.displayName || profile.name;
						user.save(function () {
							var token = createJWT(user);
							console.log('google: ' + token);
							res.send({
								token: token
							});
						});
					});
				});
			} else {

				User.findOne({
					google: profile.sub
				}, function (err, existingUser) {
					if (existingUser) {
						return res.send({
							token: createJWT(existingUser),
							profile: profile
						});
					}
					var user = new User();
					user.email = profile.email;
					user.google = profile.sub;
					user.picture = profile.picture.replace('sz=50', 'sz=200');
					user.displayName = profile.name;
					user.save(function (err) {
						var token = createJWT(user);
						console.log(token + 'server');
						res.send({
							token: token,
							profile: profile,
							user: user
						});
					});
				});
			}
		});
	});
}

function createJWT(user) {
	var payload = {
		sub: user._id,
		email: user.email,
		iat: moment().unix(),
		exp: moment().add(1, 'days').unix()
	};
	return jwt.encode(payload, config.TOKEN_SECRET);
}