//Jquery & JavaScripts
$(function () {

	let $modalBackground = $('.modal-background');
	let $modalHackyouContainer = $('.modal-hackerYou__container');

	//Prompt div to open
	$('.hello-hackerYou__btn').on('click', function(e){
		console.log('fired open');
		e.preventDefault();
		$modalBackground.addClass('show');
		$modalHackyouContainer.animate('slow');
	});

	//Prompt div to close
	$('.modal-hackerYou__close').on('click', function(){
		console.log('fired closed');
		$modalBackground.removeClass('show');
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
			        $modalHackyouContainer.hide('slow');
			    }
			    
       });	 

	//form submit
	$('#form').on('submit', function(e){		
		e.preventDefault();

		//Get input value
		let $fNameDtls = $('input[name=fName]').val();
		let $lNameDtls = $('input[name=lName]').val();
		let $emailDtls = $('input[name=email]').val();
		let $phoneInputDtls = $('input[type=number]').val();

		//Output results
	    if($(this).valid()) {
	    	let successTitle = '<h2 class="modal-hackerYou__success--sub-title align-center">Thanks for the details!!!</h2>';
	    	let $modalSuccess = $('.modal-hackerYou__success');
	        let str = '';
	        str += $fNameDtls + '<br />';
	        str += $lNameDtls + '<br />';
	        str += $emailDtls + '<br />';
	        str += $phoneInputDtls + '<br />';
	        $modalSuccess.append(successTitle , str);
	    }

	    return false;
	});


});

