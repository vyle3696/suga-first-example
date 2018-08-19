$(document).ready(function(){


    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#btn-move-top').fadeIn(); 
        } else { 
            $('#btn-move-top').fadeOut(); 
        } 
    }); 
    
    $('#btn-move-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

    var isNavVerExpand = false;
    $(".nav-right > .center").click(function(){
        
        if(isNavVerExpand){
            $(".nav-vertical").css({left: '-250px'});
            $(".project-list").css({"margin-left": '0'});
            
            $(".menu-close").text("MENU")
            $(".nav-vertical .nav-left > .top").removeClass("list-load-animation");
        }
        else{
            $(".nav-vertical").css({left: '0'});
            $(".project-list").css({"margin-left": '250px'});
            $(".menu-close").text("CLOSE")
            $(".nav-vertical .nav-left > .top").addClass("list-load-animation");
        }

        isNavVerExpand = !isNavVerExpand;

        
    });

    var isNavHorExpand = false;
    $(".icon-expand").click(function(){
        if(isNavHorExpand){
            $(".nav-horizontal  .list-text").css("right", "-100%");
            $(this).removeClass('xstyle');
            $(".nav-horizontal .list-text").removeClass("list-load-animation");
        }
        else{
            $(".nav-horizontal  .list-text").css("right", "0");
            $(this).addClass("xstyle");
            $(".nav-horizontal .list-text").addClass("list-load-animation");
        }
        isNavHorExpand = !isNavHorExpand;

    });

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        //gutter: 10,
        columnWidth: '.grid-sizer',
        percentPosition: true
        //fitWidth: true
    });
     
     $(".item-project  .item-project-inner").each(function(index) {
        //$(this).addClass("animated animatedFadeInUp fadeInUp");
        $(this).addClass("load-project-animation ");
        console.log(this);
      });

      

    // $( window ).resize(function() {
    //     updateHeightElemet();
    // });

    // function  updateHeightElemet(){

    //     $("#unit-item").height($("#unit-item").width());
    //     var  unitSize = $("#unit-item").height();
        

    //     $(".item-project.heightx1").each(function()
    //     {
    //         that.height(unitSize);   
    //     });

    //     $(".item-project.heightx2").each(function()
    //         {
    //         that.height(unitSize*2 + 7);
    //     });

          
    //   }
});
