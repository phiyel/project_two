//Jquery & JavaScripts
$(function () {
	//Variables
	let fNameDtls;
	let lNameDtls;
	let emailDtls;
	let phoneInputDtls;

	//Prompt div to open
	$('.hello-hackerYou__btn').on('click', function(){
		console.log('fired open');
		$('.modal-background').addClass('show');
	});
	

	//Prompt div to close
	$('.modal-hackerYou__close').on('click', function(){
		console.log('fired closed');
		$('.modal-background').removeClass('show');

	});


	//form validate
	 $("#form").validate({
                rules: {
                    fName: "required",
                    lName: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    phone: "required"
                },
                messages: {
                    fName: "Please enter your first name",
                    lName: "Please enter your last name",
                    email: "Please enter a valid email address",
                	phone: "Please provide a phone number"
                },
                 submitHandler: function() {
			        $('.modal-hackerYou__container').hide('slow');
			    }
       });


	//form submit
	$('#form').on('submit', function(e){
		
		e.preventDefault();
		
		//Get input value
		fNameDtls = $('input[name=fName]').val();
		lNameDtls = $('input[name=lName]').val();
		emailDtls = $('input[name=email]').val();
		phoneInputDtls = $('input[type=number]').val();


		//Output results
	    if($(this).valid()) {
	    	let successTitle = '<h2 class="modal-hackerYou__success--sub-title align-center">Thanks for the details!!!</h2>';
	        let str = '';
	        str += fNameDtls + '<br />';
	        str += lNameDtls + '<br />';
	        str += emailDtls + '<br />';
	        str += phoneInputDtls + '<br />';
	        $('.modal-hackerYou__success').append(successTitle , str);
	    }

	    return false;
	});

	


});