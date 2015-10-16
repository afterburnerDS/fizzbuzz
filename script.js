$(document).ready(function() {

	fizzbuzzer();


	
});

function fizzbuzzer() {
		var value = prompt("What is the number ?");



		if(!isNaN(parseInt(value))){

			
			for(var i = 1; i <= value; i ++){
			
				if(i%3 == 0 && i%5==0){

					$('<p></p>').appendTo('body').html("fizzBuzz,");
				} else if (i%3 == 0){

					$('<p></p>').appendTo('body').html("fizz");

				} else if(i%5 == 0){

					$('<p></p>').appendTo('body').html("buzz");
				} else {

					$('<p></p>').appendTo('body').html(i);
				}
			}
		}else {
			alert("Not a number, lets try again !")
		
			fizzbuzzer();

		}

}