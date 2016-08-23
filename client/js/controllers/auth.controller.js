(function () {
	'use strict';
	angular.module('rssreader').controller('AuthController', ['$scope', '$state', 'authService', '$window', 'dashboardService', '$auth', 'transfer', 'jwtHelper', 'toastr', function ($scope, $state, authService, $window, dashboardService, $auth, transfer, jwtHelper, toastr) {
		$scope.user = {};
		$scope.session;

		var ERRORS = {
			field_required: 'This field is required',
			email_example: 'Please, use example: jacksparrow@gmail.com',
			char_num6_required: 'Please, enter at least 6 characters',
			char_num9_required: 'Please, enter at least 9 characters',
			char_num20_required: 'Please, enter at least 20 characters'
		}

		$scope.register = function (form) {
			if (form.validate()) {
				authService.register($scope.user).error(function (error) {
					$scope.error = error;
				}).then(function (response) {
					$state.go('dashboard.' + dashboardService.getViewMode(), {
						id: authService.userID()
					});
				});
			}
		};

		$scope.logIn = function (form) {
			if (form.validate()) {
				authService.logIn($scope.user, $scope.session).error(function (error) {
					$scope.error = error;
				}).then(function () {
					if (!$scope.session) {
						$scope.onExit = function () {
							auth.logOut();
						};
						$state.go('dashboard.' + dashboardService.getViewMode(), {
							id: authService.userID()
						});
						toastr.success('You have successfully login');
						$window.onbeforeunload = $scope.onExit;
					} else {
						$state.go('dashboard.' + dashboardService.getViewMode(), {
							id: authService.userID()
						});
						toastr.success('You have successfully login');
					}
				});
			}
		};
		$scope.authenticate = function (provider) {
			$auth.authenticate(provider).then(function (response) {
				authService.saveToken(response.data.token);
				toastr.success('You have successfully authenticated');
				$state.go('dashboard.' + dashboardService.getViewMode(), {
					id: authService.userID()
				});
			})
		}

		$scope.validationLoginOptions = {
			rules: {
				mail: {
					required: true,
					email: true
				},
				pwd: {
					required: true
				}
			},
			messages: {
				mail: {
					required: ERRORS.field_required,
					email: ERRORS.email_example
				},

				pwd: {
					required: ERRORS.field_required
				}
			}
		};

		$scope.validationRegistrOptions = {
			rules: {
				mail: {
					required: true,
					email: true,
					minlength: 9,
					maxlength: 40,
				},
				pwd: {
					required: true,
					minlength: 6,
					maxlength: 20,
				},
				reppwd: {
					required: true,
					minlength: 6,
					maxlength: 20,
				}
			},
			messages: {
				mail: {
					required: ERRORS.field_required,
					email: ERRORS.email_example,
					minlength: ERRORS.char_num9_required,
					maxlength: ERRORS.char_num20_required
				},

				pwd: {
					required: ERRORS.field_required,
					minlength: ERRORS.char_num6_required,
					maxlength: ERRORS.char_num20_required
				},

				reppwd: {
					required: ERRORS.field_required,
					minlength: ERRORS.char_num6_required,
					maxlength: ERRORS.char_num20_required
				}
			}
		}
}]);
})();