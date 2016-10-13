PNotify.prototype.options.styling = "bootstrap3";

$('#submit').click(function(e){
	e.preventDefault();
	
	$.ajax({
		method: "POST",
		url: "https://ianmckay.com.au/wp-content/themes/empathy/send-mail.php",
		data: {
			subject: "Wildfire Contact",
			name: $('#name').val(),
			email: $('#email').val(),
			message: $('#message').val(),
			url: ''
		}
	})
	.done(function(msg) {
		$('#submit').removeAttr('disabled');
		new PNotify({
            title: 'Message Sent',
            text: 'Your message has been sent to the Wildfire developers.',
            type: 'success',
            icon: 'font-icon font-icon-check-circle',
            addclass: 'alert-with-icon'
        });
		$('#name').val('');
		$('#email').val('');
		$('#message').val('');
	});
	
	$(this).attr('disabled','disabled');
});
