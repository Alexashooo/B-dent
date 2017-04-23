(function(){
    function LandingCtrl($scope, $rootScope, $state){

      $rootScope.$watch(function(){
                console.log("Angular started to digest the code");
      });

/*
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





        //which elements represents web page sections
        var sectionClass = 'section-container';


        //dynamicaly adding IDs to sections
        var addIdToSections = function(sectionClass){
            $('.' + sectionClass).each(function(index){
               $(this).attr('id', 'section' + ++index);
            })
        };




        window.onbeforeunload = function () {
          window.scrollTo(0, 0);
        };


        var windowPosition = $(window).scrollTop();
        var scrolling = '';
        var allSections = $('.' + sectionClass);


        $(window).bind("load resize",function(e){
            addIdToSections(sectionClass);

        });




        $(window).scroll(function(event) {

          var scroll = $(window).scrollTop();
          if(scroll > windowPosition){
            scrolling = 'up';
          } else {
            scrolling = 'down';
          }
           windowPosition = scroll;

           if(scrolling === 'up'){

             allSections.each(function(i, el) {
                 var el = $(el);
                 if(el.visible(true) && i>0){
                    el.addClass("come-in");
                 } if(!el.visible(true) && i>0){
                   el.removeClass("come-out");
                 }
              });
           } else if(scrolling === 'down'){

             allSections.each(function(i, el) {
                 var el = $(el);
                 if(el.visible(true) && i<allSections.length-1){
                    el.addClass("come-out");
                 } if(!el.visible(true) && i>0){
                   el.removeClass("come-in");
                 }
              });
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

          allSections.each(function(i, el) {
              var el = $(el);
              if(!el.visible(true)){
                 el.removeClass("come-in come-out");
              }
           });


        }, 500);

  */




    }

    angular
      .module('bDent')
      .controller('LandingCtrl', ['$scope', '$rootScope', '$state', LandingCtrl]);
})()
