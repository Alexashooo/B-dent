(function(){
      function navigationBar(ImageSharing){

        return {
          templateUrl: 'navigation_bar.html',
          replace: true,
          restrict: 'E',
          controller: 'LandingCtrl',
          scope:{},
          link: function(scope, element, attrs){

          scope.imagesNavigation = ImageSharing.navigation;
          // height/width ratio
          scope.buttonRatio = 0.35;

          scope.section ={
             services: 'section2',
             about: 'section3',
             contact: 'section4'
          };


          }

        }
      };

  angular
      .module('bDent')
      .directive('navigationBar', ['ImageSharing', navigationBar]);
})();
