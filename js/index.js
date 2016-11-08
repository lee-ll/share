$(function(){
  $(".banner-box").css("height",$(".pic:eq("+2+") img").height());
   $(".dhli").hover(function(){
    var index=$(".dhli").index($(this));
     $(".menu").eq(index).css("visibility","visible").css("opacity",1).css("transform","translateY(-20%)");
   },function(){
     var index=$(".dhli").index($(this));
     $(".menu").eq(index).css("visibility","hidden").css("opacity",0).css("transform","translateY(0)");
   })
  if($(window).width()<992){
  $(".head-box h3 a").css("background","transparent")
}
$(window).scroll(function(){
    var obj=document.body.scrollTop?document.body:document.documentElement;
    var top=$(obj).scrollTop();
    if(top>100){
      $(".head").addClass("head2").css("transform","translateY(-60px)");
      $(".h31 a").css("background","transparent");
    }else{
      $(".head").css("transform","translateY(0px)").removeClass("head2");
      $(".h31 a").css("background","#d65679");
    }
}
)
$(".col-essay p").css("width",$(".essay-img img").width());
$(".tp").css("height",$(".item-img img").height());
$(".button").click(function(){
  if($(".plazart-mainnav").css("transform")=="matrix(1, 0, 0, 1, -250, 0)"){
     $(".plazart-mainnav").removeAttr("id");
     $(".plazart-mainnav").attr("id","right1");
  }else{
     $(".plazart-mainnav").removeAttr("id");
     $(".plazart-mainnav").attr("id","right2");
  } 
})
$(".search i").click(function(){
  $(".sousuoye").show();
   $(".input1").attr("id","youfei");
   $(".input2").attr("id","zuofei");
})
$(".sousuoye img").click(function(){
    $(".sousuoye").hide();
 })
})
 

	
