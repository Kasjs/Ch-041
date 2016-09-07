(function () {
	'use strict';
	angular.module('rssreader').config(['$validatorProvider', function ($validatorProvider) {
		$validatorProvider.addMethod("pattern", function (value, element) {
			return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).{6,20}/.test(value);
		}, "Please specify the correct domain for your documents");
	}]).controller('ProfileController', ['Upload', '$http', '$state', 'profileService', '$scope',
		'authService', '$window', 'themeService', 'dashboardService', '$auth', 'accountInfo', 'toasterService', 'transfer',
		function (Upload, $http, $state, profileService, $scope,
			authService, $window, themeService, dashboardService, $auth, accountInfo, toasterService, transfer) {
			$scope.currentUser = profileService.refreshProfileData;
			$scope.sameProvider = transfer.getProviderString();
			console.log($scope.sameProvider);
			$scope.link = function (provider) {
				$auth.link(provider).then(function () {
					toasterService.info('You have successfully linked a ' + provider + ' account');
					profileService.getProfile();
				}, function (response) {
					toasterService.error(response.data.message);
				});
			};

			$scope.unlink = function (provider) {
				$http.post('/auth/unlink', {
					id: profileService.refreshProfileData()._id,
					provider: provider
				}).then(function (response) {
					toasterService.info('You have unlinked a ' + provider + ' account');
					profileService.getProfile();
				});
			};

			$scope.updateProfile = function () {
				profileService.getProfile();
				console.log(profileService.getProfile());
			};

			$scope.newUserData = {
				email: profileService.refreshProfileData().email,
				currentPass: "",
				newPass: "",
				newPassRepeat: ""
			}

			$scope.submit = function () { //function to call on form submit
				if ($scope.upload_form.file.$valid && $scope.file) { //check if from is valid
					$scope.upload($scope.file); //call upload function
				}
			};

			$scope.upload = function (file) {
				console.log($scope.file);
				Upload.upload({
					url: '/upload', //webAPI exposed to upload the file
					data: {
						file: file,
						user: authService.userID()
					} //pass file as data, should be user ng-model
				}).then(function (resp) { //upload function returns a promise
					if (resp.data.error_code === 0) { //validate success
						profileService.getProfile();
					} else {
						toasterService.error('an error occured');
					}
				}, function (resp) { //catch error
					console.log('Error status: ' + resp.status);
					$window.alert('Error status: ' + resp.status);
				}, function (evt) {
					console.log(evt);
					var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
					console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
					$scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
				});
			};

			var PROFILE_ERRORS = {
				field_required: 'This field is required',
				email_example: 'Please, use example: jacksparrow@gmail.com',
				min_6symbl: 'Please,enter at least 6 characters',
				min_9symbl: 'Please,enter at least 9 characters',
				max_20symbl: 'Please,no more then 20 characters',
				reg_exp: 'Password must contain(a-z,A-Z,0-9,!@#)'
			};

			$scope.changePass = function (form) {
				if (form.validate()) {
					console.log("Submit change password");
					return $http.post('/changePassword', $scope.newUserData, {
						headers: {
							Authorization: 'Bearer ' + authService.getToken()
						}
					}).success(function (data) {
						toasterService.success('You have successfully changed pswd');
						authService.saveToken(data.token);
						$state.go('dashboard.' + dashboardService.getViewMode(), {
							id: authService.userID()
						});
					}).error(function (err) {
						$scope.err = err;
						console.log(err.message);
					});
				}
			};

			$scope.changePassValidation = {
				rules: {
					currentPassword: {
						required: true
					},
					newPassword: {
						required: true,
						minlength: 6,
						maxlength: 40,
						pattern: true
					},
					repeatNewPassword: {
						required: true
					}
				},
				messages: {
					currentPassword: {
						required: PROFILE_ERRORS.field_required,
						email: PROFILE_ERRORS.email_example,
						minlength: PROFILE_ERRORS.min_9symbl,
						maxlength: PROFILE_ERRORS.max_20symbl
					},
					newPassword: {
						required: PROFILE_ERRORS.field_required,
						minlength: PROFILE_ERRORS.min_6symbl,
						maxlength: PROFILE_ERRORS.max_20symbl,
						pattern: PROFILE_ERRORS.reg_exp
					},
					repeatNewPassword: {
						required: PROFILE_ERRORS.field_required
					}
				}
			};

			$scope.updateTheme = function () {
				themeService.layout = $scope.layout;
			};

			$scope.layout = themeService.layout;
			$scope.layouts = themeService.layouts;
		}
	]);
})();
