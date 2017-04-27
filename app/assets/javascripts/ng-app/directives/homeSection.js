(function(){
      function homeSection(ImageSharing){

        return {
          templateUrl: 'home_section.html',
          replace: true,
          restrict: 'E',
          scope: {},
          link: function(scope, element, attrs){

          scope.imagesHome = ImageSharing.home;

          }

        }
      };


  angular
      .module('bDent')
      .directive('homeSection', ['ImageSharing', homeSection]);
})();
