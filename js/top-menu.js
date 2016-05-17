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
        $(".sub-ddd").slideToggle("slow");
        $(this).addClass("active");
    });
});


