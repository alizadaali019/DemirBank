search=document.querySelector(".search");
video_back=document.querySelector(".video_back");
bb=document.querySelector(".bb");
video=document.querySelector("#video");
left=document.querySelector(".left");
center=document.querySelector(".center");
right=document.querySelector(".right");
hov=document.querySelector(".hov");
b_f_f=document.querySelector(".b_f_f");
b_f_s=document.querySelector(".b_f_s");
b_f_t=document.querySelector(".b_f_t");
left_center=document.querySelector(".left_center");
on_off=document.querySelector(".on_off input");
lang_a=document.querySelector(".lang");
lan_check=document.querySelector(".lang_check");
search=document.querySelector(".search");
search_last=document.querySelector(".search_last");
exit=document.querySelector(".exit");
end_f=document.querySelector(".end_f");
$(document).ready(function(){
$(".search").click(function(){
    $(".search_last").toggle(500);
    $(".search_last").css('opacity','.9');
    
})
$(".exit").click(function(){
    $(".search_last").toggle(500);
    $(".search_last").css('opacity','0');
    
})
      $(".lang_check p").click(function(){
    var slideIndex = $(this).text();
    var sd=$(".lang_a").empty();
    $(".lang_a").html(slideIndex);

  })
      var i=0;
  $(".lang").click(function(){
      $(".lang_check").css('opacity','1');
      i++;
      if(i%2==0){
      $(".lang_check").css('opacity','0');

      }
  })
    $(on_off).change(function(event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        $(".video_back").attr('src','video/stage_c.mp4');
        $(".b_f_f").attr('src','photo/cards_b.png');
        $(".b_f_s").attr('src','photo/ml_2_b.png');
        $(".b_f_t").attr('src','photo/ml_3_b.png');
        $('.bb').css('background','transparent');
        $('#video').css('opacity','1');
        $('.end_f i').css('color','#131514');
        $('.left_center').css('marginTop','91%');
    $(".left").mouseover(function(){
        $(".left").css("background-color", "#555B5A");
    });
    $(".left").mouseout(function(){
        $(".left ").css("background-color", "transparent");
    });
    $(".center").mouseover(function(){
        $(".center").css("background-color", "#555B5A");
    });
    $(".center").mouseout(function(){
        $(".center ").css("background-color", "transparent");
    });
    $(".right").mouseover(function(){
        $(".right").css("background-color", "#555B5A");
    });
    $(".right").mouseout(function(){
        $(".right ").css("background-color", "transparent");
    });
    } else {
        //Checkbox has been unchecked
          $(".video_back").attr('src','video/stage_i.mp4');
        $(".b_f_f").attr('src','photo/ml_1.png');
        $(".b_f_s").attr('src','photo/ml_2.png');
        $(".b_f_t").attr('src','photo/ml_3.png');
        $('.bb').css('background','#0dbe51');
        $('.end_f i').css('color','#45B055');
        
        $('#video').css('opacity','.4');
        $('.left_center').css('marginTop','84%');
    $(".left").mouseover(function(){
        $(".left").css("background-color", "#20BE5C");
    });
    $(".left").mouseout(function(){
        $(".left ").css("background-color", "transparent");
    });
    $(".center").mouseover(function(){
        $(".center").css("background-color", "#20BE5C");
    });
    $(".center").mouseout(function(){
        $(".center ").css("background-color", "transparent");
    });
    $(".right").mouseover(function(){
        $(".right").css("background-color", "#20BE5C");
    });
    $(".right").mouseout(function(){
        $(".right ").css("background-color", "transparent");
    });
    }
});
})