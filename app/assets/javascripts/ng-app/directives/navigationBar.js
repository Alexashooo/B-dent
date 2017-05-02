(function(){
      function navigationBar(ImageSharing){

        return {
          templateUrl: 'navigation_bar.html',
          replace: true,
          restrict: 'E',
          scope: {},
          link: function(scope, element, attrs){

          scope.imagesNavigation = ImageSharing.navigation;
          // height/width ratio
          scope.buttonRatio = 0.4;
          }

        }
      };

  angular
      .module('bDent')
      .directive('navigationBar', ['ImageSharing', navigationBar]);
})();
