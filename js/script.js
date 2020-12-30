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
sldrInterval = 40000,
animateTime = 1000,
course = 1,
margin = - slideWidth;
$('.wrap-container .latest-arrivals__item:last').clone().prependTo('.wrap-container');$('.wrap-container .latest-arrivals__item ').eq(1).clone().appendTo('.wrap-container');$('.wrap-container').css('margin-left',-slideWidth);function nxt_bSlide(){interval=window.setInterval(animate,sldrInterval)}function animate(){if(margin==-slideCount*slideWidth-slideWidth){sldr.css({'marginLeft':-slideWidth});margin=-slideWidth*2}else if(margin==0&&course==-1){sldr.css({'marginLeft':-slideWidth*slideCount});margin=-slideWidth*slideCount+slideWidth}else{margin=margin-slideWidth*(course)}sldr.animate({'marginLeft':margin},animateTime)}function sldrStop(){window.clearInterval(interval)}prv_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=-1;animate();course=course2});nxt_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=1;animate();course=course2});sldr.add(nxt_b).add(prv_b).hover(function(){sldrStop()},nxt_bSlide);nxt_bSlide()});



function getFileParam() { 			
		try { 				
			var file = document.getElementById('uploaded-file1').files[0]; 				
			
			if (file) { 					
				var fileSize = 0; 					
				
				if (file.size > 1024 * 1024) {
					fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
				}else {
					fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
				}
					
				document.getElementById('file-name1').innerHTML = 'Èìÿ: ' + file.name;
				document.getElementById('file-size1').innerHTML = 'Ðàçìåð: ' + fileSize;
				
				if (/\.(jpe?g|bmp|gif|png)$/i.test(file.name)) {		
					var elPreview = document.getElementById('preview1');
					elPreview.innerHTML = '';
					var newImg = document.createElement('img');
					newImg.className = "preview-img";
					
					if (typeof file.getAsDataURL=='function') {
						if (file.getAsDataURL().substr(0,11)=='data:image/') {
							newImg.onload=function() {
								document.getElementById('file-name1').innerHTML+=' ('+newImg.naturalWidth+'x'+newImg.naturalHeight+' px)';
							}
							newImg.setAttribute('src',file.getAsDataURL());
							elPreview.appendChild(newImg);								
						}
					}else {
						var reader = new FileReader();
						reader.onloadend = function(evt) {
							if (evt.target.readyState == FileReader.DONE) {
								newImg.onload=function() {
									document.getElementById('file-name1').innerHTML+=' ('+newImg.naturalWidth+'x'+newImg.naturalHeight+' px)';
								}
							
								newImg.setAttribute('src', evt.target.result);
								elPreview.appendChild(newImg);
							}
						};
						
						var blob;		
						if (file.slice) {
							blob = file.slice(0, file.size);
						}else if (file.webkitSlice) {
								blob = file.webkitSlice(0, file.size);
							}else if (file.mozSlice) {
								blob = file.mozSlice(0, file.size);
							}
						reader.readAsDataURL(blob);
					}
				}
			}
		}catch(e) {
			var file = document.getElementById('uploaded-file1').value;
			file = file.replace(/\\/g, "/").split('/').pop();
			document.getElementById('file-name1').innerHTML = 'Èìÿ: ' + file;
		}
	}

