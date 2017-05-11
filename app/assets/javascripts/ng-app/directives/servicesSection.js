(function(){
      function servicesSection(ImageSharing){

        return {
          templateUrl: 'services_section.html',
          replace: true,
          restrict: 'E',
          scope: {},

          link: function(scope, element, attrs){

                scope.imagesServices = ImageSharing.services.desk;

                var imageContainer = element.find('.service-box');
                    textBox = element.find('.text-box');
                    img = element.find('img');


                var imageAdjHeightWidth = function(){
                    if(imageContainer.height() >= imageContainer.width()){
                         img.removeClass('service-images-wider').addClass('service-images-higher');
                    }else{
                         img.removeClass('service-images-higher').addClass('service-images-wider');
                    }
                    textBox.css({height:img.height(), width:img.width()});
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
      .directive('servicesSection', ['ImageSharing' , servicesSection]);
})();
