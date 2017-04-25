(function(){
      function sectionAnimation(){

        return {
          restrict: 'A',
          link: function(scope, element, attrs){

            $.fn.visible = function(partial) {

            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

              return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

            };


            var windowPosition = $(window).scrollTop();
            var scrolling = '';

            $(window).scroll(function(event) {

              var scroll = $(window).scrollTop();
              if(scroll > windowPosition){
                scrolling = 'up';
              } else {
                scrolling = 'down';
              }
               windowPosition = scroll;

               if(scrolling === 'up'){
                     var el = $(element);
                     if(el.visible(true) && el.attr('id')!= 'section1'){
                        el.addClass("come-in");

                     } if(!el.visible(true) && el.attr('id')!= 'section1'){
                       el.removeClass("come-out");
                     }
               } else if(scrolling === 'down'){
                     var el = $(element);
                     if(el.visible(true) && el.attr('id')!= 'section4'){
                        el.addClass("come-out");
                     } if(!el.visible(true) && el.attr('id')!= 'section4'){
                       el.removeClass("come-in");
                     }
                }

              });


              //detecting when user stopped scrolling
              $.fn.scrollEnd = function(callback, timeout) {
                $(this).scroll(function(){
                  var $this = $(this);
                  if ($this.data('scrollTimeout')) {
                    clearTimeout($this.data('scrollTimeout'));
                  }
                  $this.data('scrollTimeout', setTimeout(callback,timeout));
                });
              };

              $(window).scrollEnd(function(){
                    var el = $(element);
                    if(!el.visible(true)){
                       el.removeClass("come-in come-out");
                    }
              }, 350);

          }

        }
      };

  angular
      .module('bDent')
      .directive('sectionAnimation', sectionAnimation);
})();
