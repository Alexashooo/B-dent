(function(){
      function homeSection(ImageSharing){

        return {
          templateUrl: 'home_section.html',
          replace: true,
          restrict: 'E',
          scope: {},
          link: function(scope, element, attrs){

          scope.imagesHome = ImageSharing.home.desk;

          var imageContainer = $('.image-home-container');
          var img = element.find('img');


          var imageAdjHeightWidth = function(){
              if(imageContainer.height() >= imageContainer.width()){
                   img.removeClass('image-home-wider').addClass('image-home-higher');

              }else{
                   img.removeClass('image-home-higher').addClass('image-home-wider');
              }
          };

          img.bind('load',function(){
                imageAdjHeightWidth();
          });

          $(window).on("resize", function(){
                imageAdjHeightWidth();
          });

          }

        }
      };


  angular
      .module('bDent')
      .directive('homeSection', ['ImageSharing', homeSection]);
})();
