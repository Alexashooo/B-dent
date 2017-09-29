(function(){
    function LandingCtrl($scope, $rootScope, $state, $location, $anchorScroll){


      window.onbeforeunload = function () {
          window.scrollTo(0, 0);
          window.setTimeout(function () { window.location = '/'; }, 0);
          window.onbeforeunload = null;
      };


      $scope.scrollTo = function(id) {
          var old = $location.hash();
          $location.hash(id);
          $anchorScroll.yOffset=parseInt(window.innerHeight*0.15);
          $anchorScroll();
          $location.hash(old);
      };

    }

    angular
      .module('bDent')
      .controller('LandingCtrl', ['$scope', '$rootScope', '$state', '$location', '$anchorScroll', LandingCtrl]);
})()
