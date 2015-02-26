(function () {
  "use strict";
  angular.module("<%= appname %>")
    .controller("MainCtrl", function () {
      var main = this;
      main.heros = [
        {
          name: "Superman",
          photo: "http://www.placecage.com/100/100"
        },
        {
          name: "Black Widow",
          photo: "http://www.placecage.com/100/100"
        },
        {
          name: "Batman",
          photo: "http://www.placecage.com/100/100"
        },
        {
          name: "Wonder Woman",
          photo: "http://www.placecage.com/100/100"
        }
      ];

      main.notFound = "We're sorry, but the page you requested is not found."
  });
})();
