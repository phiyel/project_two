//Jquery & JavaScripts
$(function () {
	//Prompt div to open
	$('.hello-hackerYou__btn').on('click', function(){
		console.log('fired');
		$('.modal-hackerYou').addClass('show');

	});


	//form part
	$('form').on('submit', function(e){
		console.log('Testing');
		e.preventDefault();
	});

});