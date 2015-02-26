(function () {
  "use strict";
  angular.module("<%= appname %>", [
    'ngRoute'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: "common/views/main.html"
        })
        .when('/not-found', {
          templateUrl: "common/views/not-found.html"
        })
        .otherwise({
          redirectTo: '/not-found'
        });
    });
})();
