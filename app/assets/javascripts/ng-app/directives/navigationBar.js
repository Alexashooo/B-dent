(function(){
      function navigationBar(ImageSharing){

        return {
          templateUrl: 'navigation_bar.html',
          replace: true,
          restrict: 'E',
          controller: 'LandingCtrl',
          scope:{},
          link: function(scope, element, attrs){

              //toggle image source, depends on device with
              ImageSharing.toggleDeskMob.call(scope, 960, 'imagesNavigation', 'navigation');

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
