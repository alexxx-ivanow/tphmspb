$(document).ready(function(){
    
	$(".but-close").click(function(){
		$(".sub-ddd").slideUp("slow");
		 $("#ddmenu li").RemoveClass("active");
	 });
	 $("#ddmenu li a").click(function(){
        $(".sub-ddd").slideDown("slow");
        $(this).addClass("active");
    });
});
