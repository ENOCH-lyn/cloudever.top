
$(".menuBtn").click(function () {
    $(".nav-ul").stop().slideToggle();
    $(this).toggleClass("open")
})
// PC二级导航
$(".nav-ul  li.level").on('mouseenter', function() {
    $(this).find("dl").stop().slideDown();
    $(this).addClass("open")

})
$(".nav-ul  li.level").on('mouseleave', function() {
    $(this).find("dl").stop().slideUp();
    $(this).removeClass("open")
})
var _width = $(document).innerWidth();
if (_width < 1024) {
    $(".nav-ul  li").off("mouseenter mouseleave");
    $(".nav-ul  li.level>a").attr("href", 'javascript:;')
    $(".nav-ul  li.level>a").click(function() {
        $(this).siblings("dl").stop().slideToggle();
        $(this).parent("li").toggleClass("open");
        $(this).parents("li").siblings("li").find("dl").slideUp();
    })
}
$(".popu01").click(function () {
    $(".popu-info").addClass("open");
})
$(".popu-info .popu-bot span").click(function () {
    $(".popu-info").removeClass("open");
})
$(".popu02").click(function () {
    $(".popu-coop").addClass("open");
})
$(".popu-coop .popu-bot span").click(function () {
    $(".popu-coop").removeClass("open");
})

$(".totop").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 300);
});
$(window).scroll(function () {
    var winScrollTop = $(window).scrollTop();
    if (winScrollTop > 300) {
        $(".totop").fadeIn(100);
    } else {
        $(".totop").fadeOut(300);
    }
    if (winScrollTop > 50) {
        $(".header").addClass("active")
    }else{
        $(".header").removeClass("active")
    }
});
