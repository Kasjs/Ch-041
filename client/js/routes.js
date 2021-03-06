angular.module('rssreader', ['ui.router', 'ngValidate', 'ngFileUpload', 'favicon'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './partials/home.html',
                controller: 'HomeController'
            })
            .state('login', {
                url: '/login',
                templateUrl: './partials/auth/login.html',
                controller: 'AuthController',
                onEnter: ['$state', 'authService', function ($state, authService) {
                    if (authService.isLoggedIn()) {
                        $state.go('home');
                    }
                }]
            })
            .state('loginAuth', {
                url: '/loginAuth',
                templateUrl: 'partials/auth/loginAuth.html',
                controller: 'AuthController'
            })
            .state('logoutAuth', {
                url: '/logoutAuth',
                templateUrl: 'partials/auth/logoutAuth.html',
                controller: 'AuthController'
            })
            .state('register', {
                url: '/register',
                templateUrl: './partials/auth/register.html',
                controller: 'AuthController',
                onEnter: ['$state', 'authService', function ($state, authService) {
                    if (authService.isLoggedIn()) {
                        $state.go('home');
                    }
                }]
            })
            .state('profile', {
                url: '/profile',
                templateUrl: './partials/auth/profile.html',
                controller: 'ProfileController',
                onEnter: ['$state', 'authService', function ($state, authService) {
                    if (!authService.isLoggedIn()) {
                        authService.logOut();
                        $state.go('home');
                    }
                }]
            })
            .state("dashboard", {
                url: '/dashboard',
                views: {
                    '': {
                        templateUrl: './partials/dashboard/dashboard.html',
                        controller: 'DashboardController'
                    },
                    'sidebar@dashboard': {
                        templateUrl: './partials/dashboard/sidebar.html',
                        controller: 'SidebarController'
                    },
                    'feedHead@dashboard': {
                        templateUrl: './partials/dashboard/feed-head.html',
                        controller: 'DashboardController'
                    }
                },
                resolve: {
                    feedPromise: ['feedsService', function (feedsService) {
                        console.log('resolveFeeds');
                        return feedsService.getAllFeeds();
                   }]
                },
                onEnter: ['articlesService', 'dashboardService', 'feedsService', '$state', 'authService', function (articlesService, dashboardService, feedsService, $state, authService) {
                    console.log("OnEnter");
                    articlesService.getAllArticles();
                }]
            })
            .state("dashboard.list", {
                url: '/list',
                templateUrl: './partials/list/list.html',
                controller: 'ArticlesController'
            })
            .state("dashboard.th-list", {
                url: '/th-list',
                templateUrl: './partials/list/th-list.html',
                controller: 'ArticlesController'
            })
            .state("dashboard.th-large", {
                url: '/th-large',
                templateUrl: './partials/list/th-large.html',
                controller: 'ArticlesController'
            })
            .state("dashboard.addFeed", {
                url: '/add',
                templateUrl: './partials/dashboard/add-feed.html',
                controller: 'FeedsController',
                onEnter: ['dashboardService', function (dashboardService) {
                    dashboardService.setTitle("Add Feed");
                }]
            });
}]);