//  Responsive Nav

$(function() {
	menu = $('nav ul');

	$('#openup').on('click',function(e) {
		e.preventDefault();
		menu.slideToggle(200);
	});

	$(window).resize(function() {
		var w = $(this).width();
		if (w > 480 && menu.is(":hidden")) {
			menu.removeAttr('style');
		}
	});

	$('nav li').on('click',function(e) {
		var w = $(window).width();
		if(w<480) {
			menu.slideToggle(200);
		}
	});
	$('.open-menu').height($(window).height());
});

$('.cf a').on('click',function(e) {
	if(this.hash !== '') {
		e.preventDefault;

		const hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		},800,function() {
			window.location.hash = hash;
		});
	}
});


$('#form-contact').validate();