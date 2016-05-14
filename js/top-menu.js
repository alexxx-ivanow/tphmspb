$(document).ready(function(){
    $("#ddmenu li").click(function(){
        $(".sub-ddd").slideToggle("slow");
        $(this).toggleClass("active");
    });
});
