var jwt = require('jwt-simple'),
	mongoose = require('mongoose'),
	request = require('request'),
	moment = require('moment'),
	User = mongoose.model('User'),
	config = require('../config/config');

module.exports.facebookAuth = function (req, res) {
	var fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name'],
		accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token',
		graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(','),
		params = {
			code: req.body.code,
			client_id: req.body.clientId,
			client_secret: config.FACEBOOK_SECRET,
			redirect_uri: req.body.redirectUri
		};

	request.get({
		url: accessTokenUrl,
		qs: params,
		json: true
	}, function (err, response, accessToken) {
		if (response.statusCode !== 200) {
			return res.status(500).send({
				message: accessToken.error.message
			});
		}

		request.get({
			url: graphApiUrl,
			qs: accessToken,
			json: true
		}, function (err, response, profile) {
			if (response.statusCode !== 200) {
				return res.status(500).send({
					message: profile.error.message
				});
			}
			if (req.header('Authorization')) {
				User.findOne({
					facebook: profile.id
				}, function (err, existingUser) {
					if (existingUser) {
						return res.status(409).send({
							message: 'There is already a Facebook account that belongs to you'
						});
					}
					var token = req.header('Authorization').split(' ')[1];
					var payload = jwt.decode(token, config.TOKEN_SECRET);
					User.findById(payload.sub, function (err, user) {
						if (!user) {
							return res.status(400).send({
								message: 'User not found'
							});
						}
						user.facebook = profile.id;
						user.picture = user.picture || 'https://graph.facebook.com/v2.3/' + profile.id + '/picture?type=large';
						user.displayName = user.displayName || profile.name;
						user.save(function () {
							var token = createJWT(user);
							res.send({
								token: token
							});
						});
					});
				});
			} else {

				User.findOne({
					facebook: profile.id
				}, function (err, existingUser) {
					if (existingUser) {
						var token = createJWT(existingUser);
						return res.send({
							token: token,
							profile: profile
						});
					}
					var user = new User();
					user.email = profile.email;
					user.facebook = profile.id;
					user.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
					user.displayName = profile.name;
					user.save(function () {
						var token = createJWT(user);
						res.send({
							token: token,
							profile: profile
						});
					});
				});
			}
		});
	});
};

function createJWT(user) {
	var payload = {
		sub: user._id,
		email: user.email,
		iat: moment().unix(),
		exp: moment().add(1, 'days').unix()
	};
	return jwt.encode(payload, config.TOKEN_SECRET);
}

