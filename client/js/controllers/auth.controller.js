(function() {
	
angular.module('rssreader').config(['$validatorProvider', function($validatorProvider) {
		$validatorProvider.addMethod("pattern", function(value, element) {
			return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).{6,20}/.test(value);
		}, "Password must contain (a-z,A-Z,0-9,!@#)");
		$validatorProvider.addMethod("email", function (value, element) {
		    return this.optional(element) || /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value);
		}, "Please enter a valid email address.")
	}]).
	controller('AuthController', ['$scope', '$state', 'authService', '$window', 'dashboardService', '$auth', 'transfer', 'jwtHelper', 'toasterService', '$timeout', 
		function ($scope, $state, authService, $window, dashboardService, $auth, transfer, jwtHelper, toasterService, $timeout) {
		
        var ERRORS = {
            field_required: 'This field is required',
            email_example: 'Please, use example: jacksparrow@gmail.com',
            min_6symbl: 'Please, enter at least 6 characters',
            min_9symbl: 'Please, enter at least 9 characters',
            max_20symbl: 'Please, enter no more then 40 characters',
            reg_exp: 'Password must contain (a-z,A-Z,0-9,!@#)'
        }
        $scope.user = {
            verifyEmail : transfer.getString(),
            counter : 0
        };
        transfer.setString("");
        $scope.setEmail = function () {
            return transfer.getEmail().verifEmail;
        }
        $scope.password = {
            token : transfer.getObj(),
            email : transfer.getEmail()
        };
        $scope.confirm_email = {};
        $scope.session;

        $scope.register = function (form) {
            if (form.validate()) {
                dashboardService.displayLoading();
                    if ($scope.user.verifyEmail) {
                        $scope.user.email = transfer.getEmail().verifEmail;
				    }
				authService.register($scope.user).error(function (error) {
					dashboardService.hideLoading();
                    var symbol = $scope.user.email.indexOf('@');
					var emailAgent = $scope.user.email.slice(symbol + 1);
					$scope.linkProvider = emailAgent;
					$scope.error = error;
				}).then(function (response) {
				    dashboardService.hideLoading();
					toasterService.success(response.data.message);
					$state.go('dashboard.' + dashboardService.getViewMode(), {
						id: authService.userID()
					});
					$scope.user.counter ++;
				});
			}
		};

    	$scope.logIn = function (form) {
    	    if (form.validate()) {
    	        dashboardService.displayLoading();
    	        authService.logIn($scope.user, $scope.session).error(function (error) {
    	            dashboardService.hideLoading();
    				$scope.error = error;
    			}).then(function (response) {
    				if (!$scope.session) {
    					$scope.onExit = function () {
    						auth.logOut();
    					};
                        dashboardService.hideLoading();
    					$state.go('dashboard.' + dashboardService.getViewMode(), {
    						id: authService.userID()
    					});
    					toasterService.success(response.data.message);
    					$window.onbeforeunload = $scope.onExit;
    				} else {
    					$state.go('dashboard.' + dashboardService.getViewMode(), {
    						id: authService.userID()
    					});
    					toasterService.success(response.data.message);
    				}
    			});
    		}
    	};
		
		$scope.forgot = function(form){
			authService.forgot($scope.confirm_email).error(function (error) {
				$scope.error = error;	
				toasterService.error(error.message);
			}).then(function (response) {
				toasterService.info('An e-mail has been sent to ' + $scope.confirm_email.email + ' with further instructions.');	
			})
		}

        $scope.reset = function(form){
            authService.reset($scope.password).error(function (error) {
                $scope.error = error;
                toasterService.error(error.message);
            }).then(function (response) {
                toasterService.success('You have successfully changed password');
                $state.go('login'); 
            })
        };  

		$scope.authenticate = function (provider) {
			transfer.setProviderString(provider);
			$auth.authenticate(provider).then(function (response) {
				$auth.removeToken();
				authService.saveToken(response.data.token);
				if (response.data.message) {
					toasterService.success(response.data.message);
				}
				toasterService.success('You have successfully authenticated')
				$state.go('dashboard.' + dashboardService.getViewMode(), {type: 'all'});
			},function (response) {
				toasterService.error(response.data.message);
			})
		};
        
        $scope.defaultAgreeWith = function () {
            $scope.agreeWith = false;
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
                    pattern: true
                },
                reppwd: {
                    required: true
                }
            },
            messages: {
                mail: {
                    required: ERRORS.field_required,
                    email: ERRORS.email_example,
                    minlength: ERRORS.min_9symbl,
                    maxlength: ERRORS.max_20symbl
                },

                pwd: {
                    required: ERRORS.field_required,
                    minlength: ERRORS.min_6symbl,
                    maxlength: ERRORS.max_20symbl,
                    pattern: ERRORS.reg_exp
                },

                reppwd: {
                    required: ERRORS.field_required
                }
            }
        }
    }]);
})();