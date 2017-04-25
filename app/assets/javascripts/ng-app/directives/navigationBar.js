(function(){
      function navigationBar(ImageSharing){

        return {
          templateUrl: 'navigation_bar.html',
          replace: true,
          restrict: 'E',
          scope: {},
          link: function(scope, element, attrs){

          scope.imagesNavigation = ImageSharing.navigation;

          }

        }
      };






  angular
      .module('bDent')
      .directive('navigationBar', ['ImageSharing', navigationBar]);
})();
