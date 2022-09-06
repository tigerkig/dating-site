
$(document).ready(function () {
	$('.jt-menu > li > ul').before('<span class="arrowBtn"></span>');
	$('.jt-menu > li > ul > li > ul').before('<span class="arrowBtnLast"></span>');
	$(".jt-menu > li > ul").addClass('subMenu');
	$(".jt-menu > li > ul > li > ul").addClass('subMenuLast');
	$(".touchBtn").click(function () { 
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).next('.jt-menu').slideUp();
			$(this).next('.jt-menu').removeClass("menuShow");
			$('.subMenu').slideUp();
		}
		else{
			$(this).addClass('active');
			$(this).next('.jt-menu').slideDown();
			$(this).next('.jt-menu').addClass("menuShow");
		}
	});
	$(".jt-menu li .arrowBtn").click(function () {
		if($(this).hasClass('activeSub')){
			$(this).removeClass('activeSub');
			$(this).next('.subMenu').slideUp();
		}
		else{
			$('.jt-menu li .arrowBtn').removeClass('activeSub');
			$(this).addClass('activeSub');               
			$('.subMenu').slideUp();
			$(this).next('.subMenu').slideDown();
		}
	});
	$(".jt-menu li .arrowBtnLast").click(function () {
		if($(this).hasClass('activeSubLast')){
			$(this).removeClass('activeSubLast');
			$(this).next('.subMenuLast').slideUp();
		}
		else{
			$('.jt-menu li .arrowBtnLast').removeClass('activeSubLast');
			$(this).addClass('activeSubLast');               
			$('.subMenuLast').slideUp();
			$(this).next('.subMenuLast').slideDown();
		}
	});
});
$(window).resize(function () {
	var windowWidth = $(window).width();
	if(windowWidth > 1080){
		$(".jt-menu li .arrowBtn").removeClass('activeSub');
		$(".touchBtn").removeClass('active');
		$("ul").removeAttr("style");
	}
});