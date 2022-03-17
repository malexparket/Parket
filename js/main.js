$(document).ready(function() {
    //popup
    $('.header__online').on('click', function () { 
        $('.popup').addClass('popup__show');
    });
    $('.popup_close').on('click', function () { 
        $('.popup').removeClass('popup__show');
    })
    
    
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваша заявка получена");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			$('.popup_close').on('click', function () { 
				$('.popup').removeClass('popup__show');
			})
		});
		return false;
	});
	$("#phone").inputmask("+7(999)999-99-99")
});