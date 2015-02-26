(function(module) {

    module.config(function ($routeProvider) {
        $routeProvider
          .when('/<%= lowerModuleName %>', {
            controller: '<%= capitalModuleName %>Controller as model',
            templateUrl: '<%= name %>/<%= name %>.tpl.html'

          });
    });

}(angular.module("<%= appname %>.<%= camelModuleName %>", [
    'ngRoute'
])));
