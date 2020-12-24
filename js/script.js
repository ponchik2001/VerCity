$(document).click(function () {
    if ($('.navbar__item').css('display') == 'block') {
        $('.burger').click(function () {
            var $speech = $('div.navbar__item');
            $speech.css('display', 'none');
        })
        $('.burger').click(function () {
            var $speech = $('div.sell-my-car');
            $speech.css('display', 'none');
        })
    } else if ($('.navbar__item').css('display') == 'none') {
        $('.burger').click(function () {
            var $speech = $('div.navbar__item');
            $speech.css('display', 'block');
        })
        $('.burger').click(function () {
            var $speech = $('div.sell-my-car');
            $speech.css('display', 'block');
        })
    }
})



$(function() {
var sldr = $('.wrap-container'),
sldrContent = sldr.html(),
slideWidth = $('.latest-arrivals__container').outerWidth(),
slideCount = $('.wrap-container .latest-arrivals__item').length,
prv_b = $('.right-btn'),
nxt_b = $('.left-btn'),
sldrInterval = 330000,
animateTime = 1000,
course = 1,
margin = - slideWidth;
$('.wrap-container .latest-arrivals__item:last').clone().prependTo('.wrap-container');$('.wrap-container .latest-arrivals__item ').eq(1).clone().appendTo('.wrap-container');$('.wrap-container').css('margin-left',-slideWidth);function nxt_bSlide(){interval=window.setInterval(animate,sldrInterval)}function animate(){if(margin==-slideCount*slideWidth-slideWidth){sldr.css({'marginLeft':-slideWidth});margin=-slideWidth*2}else if(margin==0&&course==-1){sldr.css({'marginLeft':-slideWidth*slideCount});margin=-slideWidth*slideCount+slideWidth}else{margin=margin-slideWidth*(course)}sldr.animate({'marginLeft':margin},animateTime)}function sldrStop(){window.clearInterval(interval)}prv_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=-1;animate();course=course2});nxt_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=1;animate();course=course2});sldr.add(nxt_b).add(prv_b).hover(function(){sldrStop()},nxt_bSlide);nxt_bSlide()});


function counterP(){
    var sum = document.getElementById('counter1').innerHTML;
    console.log(sum);
    
}
