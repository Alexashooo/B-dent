(function(){
      function contactSection(ImageSharing){

        return {
          templateUrl: 'contact_section.html',
          replace: true,
          restrict: 'E',
          scope: {},

          link: function(scope, element, attrs){

          scope.imagesContact = ImageSharing.contact;

          }

        }
      };


  angular
      .module('bDent')
      .directive('contactSection', ['ImageSharing', contactSection]);
})();
