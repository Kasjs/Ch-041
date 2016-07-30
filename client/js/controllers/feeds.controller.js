angular.module('rssreader').controller('FeedsController', ['$scope', '$state', 'feedsService', 'authService', function ($scope, $state, feedsService, authService) {
    $scope.test = 'Hello world!';
    $scope.obj = {};
    $scope.feeds = feedsService.feeds;


    $scope.addFeed = function () {
        var status = feedsService.addFeed({
            link: $scope.obj.link,
        });
        console.log(status);
        // feedsService.addFeed(authService.userID(), {
        //     title: $scope.obj.title,
        //     link: $scope.obj.link,
        // });
        // $scope.obj.title = '';
        // $scope.obj.link = '';
        // $state.go("dashboard.feed", {}, { reload: true });
    }
    $scope.removeFeed = function (feedId) {
        feedsService.removeFeed(authService.userID(), feedId);
        //$scope.feeds = feedsService.getFeeds();
        $state.reload();
    }
}]);