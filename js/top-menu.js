$(document).ready(function(){
    
	$(".but-close").click(function(){
		$(".sub-ddd").slideUp("slow");
		 $("#ddmenu li").removeClass("active");
	 });
	 $("#ddmenu li a").click(function(){
        $(".sub-ddd").slideToggle("slow");
        $(this).addClass("active");
    });
	$(".square-dropdown").click(function(){
        $(".right-top-menu").slideToggle("slow");
        $(this).addClass("active");
    });
});

$(window).load(function(){
	$(".car-description-three").css({"background":"#2563B7","color":"#fff"});
	
});