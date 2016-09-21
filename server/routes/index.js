var mongoose = require('mongoose'),
	express = require('express'),
	router = express.Router(),
	Article = mongoose.model('Article'),
	Feed = mongoose.model('Feed'),
	googleAuth = require('../controllers/googleAuth'),
	facebookAuth = require('../controllers/facebookAuth'),
	twitterAuth = require('../controllers/twitterAuth'),
	linkedInAuth = require('../controllers/linkedInAuth'),
	unlink = require('../controllers/unlink'),
	userInfo = require('../controllers/userInfo'),
	authCtrl = require('../controllers/authentication'),
	articlesCtrl = require('../controllers/articles'),
	feedsCtrl = require('../controllers/feeds'),
	profCtrl = require('../controllers/profile');

router.post('/register', authCtrl.register);
router.post('/forgot', authCtrl.forgotPass);
router.get('/reset/:token', authCtrl.reset);
router.post('/reset/:token', authCtrl.resetPost);
router.post('/login', authCtrl.login);
router.post('/changePassword', authCtrl.changePassword);
//Auth
router.post('/users/:user/changeColorTheme', profCtrl.changeColorTheme);
router.post('/auth/google', googleAuth.googleAuth);
router.post('/auth/facebook', facebookAuth.facebookAuth);
router.post('/auth/twitter', twitterAuth.twitterAuth);
router.post('/auth/linkedin', linkedInAuth.linkedInAuth);
router.post('/auth/unlink', unlink.unlink);
router.get('/api/me', userInfo.getUserInfo);
router.put('/api/me', userInfo.putUserInfo);

// define user param
router.param('user', feedsCtrl.userParam);
// get user and his feeds
router.get('/users/:user', feedsCtrl.allFeed);
router.get('/users/:user/favourites', articlesCtrl.allFavourites);
router.get('/users/:user/advicedFeeds', feedsCtrl.getAdvicedFeeds);
router.get('/users/:user/advicedArticles', articlesCtrl.getAdvicedArticles);

// add new feed
router.post('/users/:user/addFeed', feedsCtrl.add);
router.post('/users/:user/setCategoryOrder', feedsCtrl.setCategoryOrder);
router.post('/users/:user/setFavsCategoryOrder', feedsCtrl.setFavsCategoryOrder);
router.post('/users/:user/addFavArticle', articlesCtrl.addFavArticle);
router.post('/users/:user/getFavArticle', articlesCtrl.getFavArticle);
router.post('/users/:user/getFeedData', feedsCtrl.getFeedData);
router.post('/users/:user/upload', profCtrl.upload);
router.post('/users/:user/changeFeedCategory', feedsCtrl.changeFeedCategory);

// remove feed
router.delete('/users/:user/deleteFeed/:id/:category', feedsCtrl.remove);
router.delete('/users/:user/deleteFavFeed/:id/:category', articlesCtrl.removeFavArticle);

module.exports = router;