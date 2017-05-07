(function(){
      function aboutSection(ImageSharing){

        return {
          templateUrl: 'about_section.html',
          replace: true,
          restrict: 'E',
          scope: {},

          link: function(scope, element, attrs){

          scope.imagesAbout = ImageSharing.about.desk;

         }
        }
      };






  angular
      .module('bDent')
      .directive('aboutSection', ['ImageSharing', aboutSection]);
})();
