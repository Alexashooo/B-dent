(function(){
      function servicesSection(ImageSharing){



        return {
          templateUrl: 'services_section.html',
          replace: true,
          restrict: 'E',
          scope: {},

          link: function(scope, element, attrs){

          scope.imagesServices = ImageSharing.services;

          }

        }
      };






  angular
      .module('bDent')
      .directive('servicesSection', ['ImageSharing' , servicesSection]);
})();
