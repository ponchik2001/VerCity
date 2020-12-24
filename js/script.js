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
    }
    else if ($('.navbar__item').css('display') == 'none') {
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

